import { AppState } from '../Appstate'
import { sandboxApi } from './AxiosService'

class HousesService {
  async getHouses() {
    try {
      const res = await sandboxApi.get('houses')
      AppState.houses = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async getHouse(id) {
    try {
      const res = await sandboxApi.get('houses/' + id)
      console.log(res)
      AppState.activeHouse = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createHouse(rawhouse) {
    try {
      const res = await sandboxApi.post('houses', rawhouse)
      AppState.houses.push(res.data)
      return res.data._id
    } catch (error) {
      console.error(error)
    }
  }

  async bid(id) {
    const house = AppState.houses.find(h => h.id === id)
    house.price += 100
    try {
      await sandboxApi.put('houses/' + id, house)
    } catch (error) {

    }
  }

  async deleteHouse(id) {
    try {
      await sandboxApi.delete(`houses/${id}`)
      this.getHouses()
    } catch (error) {
      console.error(error)
    }
  }
}

export const housesService = new HousesService()
