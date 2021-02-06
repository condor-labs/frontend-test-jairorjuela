<template>
  <div>
    Soy el primer Widget
    <i class="fab fa-accessible-icon"></i>
    <h4>{{principalPlace}}</h4>
  </div>
</template>

<script>
  import PlacesService from '@/services/places.service'

  const placesServices = new PlacesService

  export default {
    name: 'WeatherSite',

    data(){
      return {
        principalPlace: {}
      }
    },

    created(){
      this.getAllPlaces()
    },

    methods: {
      async getAllPlaces(){
        await placesServices.getPlaces()
          .then(response => {
            this.principalPlace = placesServices.getPrincipalPlace(response.data)
          })
      }
    }
  }
</script>
