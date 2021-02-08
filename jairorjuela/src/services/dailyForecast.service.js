import axios from 'axios'
import moment from 'moment'

export default class DailyForecastService {
  getDailyForecast(){
    return axios.get('https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7')
  }

  tempInCelsius(temp){
    return temp - 273.1500
  }

  getDay(date){
    const day = moment(date, 'YYYY/MM/DD')

    return day.format('dddd')
  }

  getDailyItems(items){
    const response = []

    items.list.forEach(item => {
      const dailyForecast = {
        day: this.getDay(item.date),
        temp: Math.round(this.tempInCelsius(item.main.temp)),
        percent: item.wind.deg,
        speed: item.wind.speed,
        humidity: item.main.humidity,
        icon: item.weather[0].icon,
        date: item.date
      }

      const city = `${items.city.name} - ${items.city.country}`

      response.push({city: city, ...dailyForecast})
    })

    return response
  }

  getMinHumidity(places) {
    return places.reduce((min, place) => place.humidity < min ? place.humidity : min, places[0].humidity);
  }

  getBestDay(places){
    const betterTemp = []

    places.forEach(place => {
      if(place.temp >=25 && place.temp <= 28){ betterTemp.push(place) }
    })

    const minHumidity = this.getMinHumidity(betterTemp)

    let bestPlace = {}

    betterTemp.forEach(place => {
      if(place.humidity === minHumidity){ bestPlace = place }
    })

    return bestPlace
  }
}
