<template>
  <div>
    <div id="widget-header" :style="{ backgroundImage: `url(${imgSrc})`, backgroundRepeat: 'no-repeat' }">
      <section class="up-position">
        <h1 class="widget-headquarter"><i class="fas fa-map-marker-alt"></i> {{namePlace}}</h1>
        <span class="widget-icon">
          <i :class="temperatureIcon"></i>
        </span>
      </section>
        <h1 class="widget-weather">{{temperature}} <span>&#8451;</span></h1>
      <section class="down-position">
        <h4 class="widget-percent">{{percent}}%</h4>
        <h4 class="widget-speed">{{speed}}m/s</h4>
      </section>
        <h1 class="widget-greeting">{{greeting}}, Condor</h1>
    </div>
  </div>
</template>

<script>
  import PlacesService from '@/services/places.service'
  import "weathericons/css/weather-icons.css";
  //import "weathericons/css/weather-icons-wind.css";

  const placesServices = new PlacesService

  export default {
    name: 'WeatherSite',

    data(){
      return {
        namePlace: '',
        temperature: 0,
        temperatureIcon: '',
        greeting: '',
        percent: 0,
        speed: 0,
        imgSrc: ''
      }
    },

    created(){
      this.getAllPlaces()
    },

    methods: {
      async getAllPlaces(){
        await placesServices.getPlaces()
          .then(response => {
            const principalPlace = placesServices.getPrincipalPlace(response.data)
            this.getPlaceData(principalPlace)
          })
      },

      getPlaceData(principalPlace){
        const placesData = placesServices.getPlacesData(principalPlace)

        this.temperature = placesData.temp
        this.namePlace = placesData.name
        this.temperatureIcon = placesData.icon
        this.greeting = placesData.greeting
        this.percent = placesData.percent
        this.speed = placesData.speed
        this.imgSrc = placesData.img
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
