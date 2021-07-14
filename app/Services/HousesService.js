import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";


class HousesService {
  createHouse(home) {
    ProxyState.houses = [...ProxyState.houses, new House(home)]
  }
}

export const housesService = new HousesService()