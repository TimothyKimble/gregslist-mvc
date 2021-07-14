import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {

  constructor() {
    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => { console.log('new house') })

    _draw()
  }

  addHouse() {
    event.preventDefault()
    let form = event.target
    let home = {
      year: form.year.value,
      bed: form.bed.value,
      bath: form.bath.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    housesService.createHouse(home)
    form.reset()
  }
}