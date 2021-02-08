<template>
  <div id="widget-suggest">
    <h1 class="widget-headquearter">{{ bestDay.city }}</h1>
    <span class="widget-icon"><i :class="bestDayIcon"></i></span>
    <h1 class="widget-day">{{ bestDay.day }}</h1>
  </div>
</template>

<script>
  import DailyForecastService from '@/services/dailyForecast.service'
  import PlacesService from '@/services/places.service'
  import "weathericons/css/weather-icons.css";

  const dailyForecastService = new DailyForecastService
  const placesServices = new PlacesService

  export default {
    name: 'WidgetFour',

    data(){
      return {
        dailyItems: [],
        bestDay: {},
        bestDayIcon: ''
      }
    },

    created(){
      this.getForecast()
    },

    methods: {
      async getForecast(){
        await dailyForecastService.getDailyForecast()
          .then(response => {
            this.dailyItems = dailyForecastService.getDailyItems(response.data)
            this.bestDay = dailyForecastService.getBestDay(this.dailyItems)
            this.bestDayIcon = placesServices.getIconWithoutTime(this.bestDay.icon, this.bestDay.date)
            console.log(this.bestDay)
          })
      }
    }
  }
</script>
