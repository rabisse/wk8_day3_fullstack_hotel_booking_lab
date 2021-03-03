<template>
  <div class="booking-item">
      <h3>{{ booking.name }}</h3>
      <p>Guest Email Address: {{ booking.email }}</p>
      <p>Booking Status: {{ booking.status }}</p>
      <button type="button" class="delete-button" v-on:click="deleteBooking">Remove booking</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
    name: 'booking-item',
    props: ['booking'],
    methods: {
        deleteBooking() {
            BookingsService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id))
        }
    }
}
</script>

<style>

</style>