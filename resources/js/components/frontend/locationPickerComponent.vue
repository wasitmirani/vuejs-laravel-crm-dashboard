<template>
    <div>
        <div class="col-lg-12">
            <form>
                <input
                    type="text"
                    id="address-input"
                    name="address_address"
                    v-model="address"
                    ref="autocomplete"
                    placeholder="Enter Your Location"
                    class="form-control map-input"
                />
                <input type="hidden" name="address_latitude" id="address-latitude" value="0" />
                <input type="hidden" name="address_longitude" id="address-longitude" value="0" />

                <button type="button" class="btn btn-primary" @click="locatorButtonPressed">GO</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            address: "",
        };
    },
    methods: {
        locatorButtonPressed() {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position.coords.latitude);
                    console.log(position.coords.longitude);
                    this.getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
                },
                error => {
                    console.log(error.message);
                },
            )
        },
        async getStreetAddressFrom(lat, long) {
            try {
                fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + "," + long + "&key=AIzaSyDKajOdzosdJnxmVpmLF2F36eHdZQIZOyQ")
                    .then(response => response.json())
                    .then(data => console.log(data));



            } catch (error) {
                console.log(error.message);
            }
        }
    },
    mounted() {
        console.log('Component mounted.')
        new google.maps.places.Autocomplete(
            this.$refs["autocomplete"]
        );
    }
}
</script>
