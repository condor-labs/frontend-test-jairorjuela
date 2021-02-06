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
}
