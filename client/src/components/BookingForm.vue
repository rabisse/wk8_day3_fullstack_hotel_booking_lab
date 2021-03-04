<template>
    <form v-on:submit="addBooking" method="post">
        <label for="guestName">Guest Name: </label>
        <input type="text" id="guestName" v-model="name" required />
        <br><br>
        <label for="guestEmail">Guest Email: </label>
        <input type="email" id="guestEmail" v-model="email" required />
        <br><br>
        <label for="checkedInStatus">Check-in Status: </label>
        <select name="status" id="checkedInStatus" v-model="checkedIn" required >
            <option value="false">Not checked in</option>
            <option value="true">Checked in</option>
        </select>
        <br><br>
        <input type="submit" value="Save" id="save"/>
    </form>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
    name: 'booking-form',
    data(){
        return {
            name: '',
            email: '',
            checkedIn: null
        }
    },

    methods: {
        addBooking(evt){
            evt.preventDefault()
            const booking = {
                name: this.name,
                email: this.email,
                checkedIn: this.checkedIn
            }
            BookingsService.postBooking(booking)
            .then(function(response) {
                if (!response.error) {
                    eventBus.$emit('booking-added', response) 
                } else {
                    console.log("Missing field");
                    alert("Missing field")
                }
            }
            )
            // .then(response => eventBus.$emit('booking-added', response))
        }
    }
}
</script>

<style>

</style>