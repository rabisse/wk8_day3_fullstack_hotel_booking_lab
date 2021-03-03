<template lang="html">
  <div class="booking-wrapper">
      <booking-item v-for="(booking, index) in bookings"
        :key="index" :booking="booking"/>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'
import BookingItem from './BookingItem'

export default {
    name: 'bookings-grid',
    data(){
        return {
            bookings: []
        };
    },

    mounted(){
        BookingsService.getBookings()
        .then(bookings => this.bookings = bookings);

        eventBus.$on('booking-added', (booking) => {
            this.bookings.push(booking)
        })

        eventBus.$on('booking-deleted', (id) => {
            let index = this.bookings.findIndex(booking => booking._id === id)
            this.bookings.splice(index, 1)
        })
    },

    components: {
        'booking-item': BookingItem  
    }
}
</script>

<style>

</style>