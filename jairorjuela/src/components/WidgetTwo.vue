<template>
  <div>
  soy el dos
  </div>
</template>

<script>
  import DailyForecastService from '@/services/dailyForecast.service'
  import "weathericons/css/weather-icons.css";

  const dailyForecastService = new DailyForecastService

  export default {
    name: 'WidgetTwo',

    data(){
      return {
        dailyItems: []
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
            console.log(this.dailyItems)
          })
      }
    }
  }
</script>
