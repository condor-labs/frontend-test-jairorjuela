<template>
  <div id="#widget-carousel" class='carousel-view'>
    <div class='carousel-controls'>
      <a class='carousel-controls__button' @click="previous">
        <i class="far fa-arrow-alt-circle-left"></i>
      </a>
      <a class='carousel-controls__button' @click="next">
        <i class="far fa-arrow-alt-circle-right"></i>
      </a>
    </div>
    <transition-group
      class='carousel'
      tag="div"
    >
      <div
        v-for="item in dailyItems"
        class='slide'
        :key="item.day"
      >
        <div class="row-day">
          <h5 class="widget-day">{{ item.day }}</h5>
        </div>
        <div class="row-temp">
          <h2 class="widget-temp">{{ item.temp }} <span>&#8451;</span></h2>
        </div>
        <div class="carousel-percent">
          <h4 >{{item.percent}}%</h4>
        </div>
        <div class="carousel-speed">
          <h4 >{{item.speed}}m/s</h4>
        </div>
      </div>
    </transition-group>
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
          })
      },

      next() {
        const first = this.dailyItems.shift()
        this.dailyItems.push(first)
      },

      previous() {
        const last = this.dailyItems.pop()
        this.dailyItems = [last,...this.dailyItems]
      }
    }
  }
</script>
