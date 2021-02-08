<template>
  <div class="widget-card">
    <h1 class="title-widgets">Our favorites places</h1>
    <div id="widget-favorite" class="container" v-for="place in allPlaces">
      <div class="row-image">
        <img class="widget-image" :src="place.cityImg">
      </div>
      <div class="row-description">
        <h1 class="widget-headquarter-name"><i class="fas fa-map-marker-alt"></i>  {{ place.city }} - {{ place.country }}</h1>
        <p class="widget-description">{{ place.description }}</p>
        <ul class="card-list">
          <li class="card-list-temp">{{ place.temp }} <span>&#8451;</span></li>
          <li class="card-list-percent">{{ place.percent }} %</li>
          <li class="card-list-speed">{{ place.speed }} m/s</li>
        </ul>
      </div>
      <div class="row-icon">
        <i id="widget-icon" :class="place.tempIcon"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import PlacesService from '@/services/places.service'
  import "weathericons/css/weather-icons.css";

  const placesServices = new PlacesService

  export default {
    name: 'WidgetThree',

    data(){
      return {
        namePlace: '',
        country: '',
        temperature: 0,
        temperatureIcon: '',
        description: '',
        percent: 0,
        speed: 0,
        imgSrc: '',
        allPlaces: []
      }
    },

    created(){
      this.getAllPlaces()
    },

    methods: {
      async getAllPlaces(){
        await placesServices.getPlaces()
          .then(response => {
           this.getAllPlacesData(response.data.places)
          })
      },

      getAllPlacesData(places){
        places.forEach(place => {
          const placeData = placesServices.getPlacesData(place)

          const data = {
            temp: this.temperature = placeData.temp,
            city: this.namePlace = placeData.name,
            country: this.country = placeData.country,
            tempIcon: this.temperatureIcon = placeData.icon,
            description: this.description = placeData.description,
            percent: this.percent = placeData.percent,
            speed: this.speed = placeData.speed,
            cityImg: this.imgSrc = placeData.img
          }

          this.allPlaces.push(data)
        })
      }
    }
  }
</script>
