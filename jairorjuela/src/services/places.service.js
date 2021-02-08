import axios from 'axios'

export default class PlacesService {
  getPlaces(){
    return axios.get('https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582')
  }

  getPrincipalPlace(places){
    var principal = {}

    places.places.forEach(place => {
      if(place.main_headquarter){
        principal = place
      }
    })

    return principal
  }

  tempInCelsius(temp){
    return temp - 273.1500
  }

  getGreeting(date){
    const hour = parseInt(date.split(' ')[1])

    if(hour >= 5 && hour < 12){ return 'Morning' }
    if(hour >= 12 && hour <= 18){ return 'Afternoon' }
    if(hour >= 19 && hour <= 4){ return 'Evening' }
  }

  getIcon(icon, time){
    if(time === 'Morning'){
      const dayIcons = new Map()

      dayIcons.set('snow', 'wi wi-day-snow')
      dayIcons.set('cloudy', 'wi wi-day-cloudy')
      dayIcons.set('rain', 'wi wi-day-rain')
      dayIcons.set('fog', 'wi wi-day-fog')
      dayIcons.set('haze', 'wi wi-day-haze')
      dayIcons.set('day-sunny', 'wi wi-day-sunny')
      dayIcons.set('hot', 'wi wi-hot')

      return dayIcons.get(icon)
    }else{
      const nightIcons = new Map()

      nightIcons.set('snow', 'wi wi-night-alt-snow')
      nightIcons.set('cloudy', 'wi wi-night-alt-cloudy')
      nightIcons.set('rain', 'wi wi-night-alt-rain')
      nightIcons.set('fog', 'wi wi-night-fog')

      return nightIcons.get(icon)
    }
  }

  getPlacesData(principalPlace){
    const time = this.getGreeting(principalPlace.date)
    const response = {
      temp: Math.round(this.tempInCelsius(principalPlace.main.temp)),
      name: principalPlace.name,
      country: principalPlace.sys.country,
      greeting: `Good ${time}`,
      icon: this.getIcon(principalPlace.weather[0].icon, time),
      percent: principalPlace.wind.deg,
      speed: principalPlace.wind.speed,
      img: principalPlace.image,
      description: principalPlace.description
    }

    return response
  }

  getIconWithoutTime(icon, date){
    const time = this.getGreeting(date)

    return this.getIcon(icon, time)
  }
}
