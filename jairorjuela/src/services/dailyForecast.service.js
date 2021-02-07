import axios from 'axios'

export default class DailyForecastService {
  getDailyForecast(){
    return axios.get('https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7')
  }

  tempInCelsius(temp){
    return temp - 273.1500
  }

  getDailyItems(items){
    const response = []

    items.list.forEach(item => {
      const dailyForecast = {
        day: item.date,
        temp: this.tempInCelsius(item.main.temp),
        percent: item.wind.deg,
        speed: item.wind.speed
      }

      response.push(dailyForecast)
    })

    return response
  }
}
