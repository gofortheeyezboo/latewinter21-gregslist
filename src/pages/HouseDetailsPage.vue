<template>
    <div class="house-details">
<h1>{{ state.house.bathrooms }} | {{ state.house.bedrooms }} details</h1>
    <img src="" alt="" />
    <button type="button" class="btn btn-outline-danger" @click="deleteHouse">
      Delete house
    </button>
    <div class="row my-3">
      <form class="form-inline" onsubmit="app.housesController.createHouse(event)">
        <div class="form-group">
          <input
            type="number"
            name="levels"
            id="levels"
            class="form-control"
            placeholder="levels"
            aria-describedby="helpId"
            v-model="state.house.levels"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="bedrooms"
            id="bedrooms"
            class="form-control"
            placeholder="bedrooms"
            aria-describedby="helpId"
            v-model="state.house.bedrooms"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="bathrooms"
            id="bathrooms"
            class="form-control"
            placeholder="bathrooms"
            aria-describedby="helpId"
            v-model="state.house.bathrooms"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            name="year"
            id="year"
            class="form-control"
            placeholder="year"
            aria-describedby="helpId"
            v-model="state.house.year"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            name="price"
            id="price"
            class="form-control"
            placeholder="Price"
            aria-describedby="helpId"
            v-model="state.house.price"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="description"
            id="description"
            class="form-control"
            placeholder="description"
            aria-describedby="helpId"
            v-model="state.house.description"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"
            class="form-control"
            placeholder="ImgUrl"
            aria-describedby="helpId"
            v-model="state.house.imgUrl"
          />
        </div>
        <button class="btn btn-info" type="submit">Create</button>
      </form>
    </div>
    </div>
</template>

<script>

import { onMounted, reactive, computed } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { housesService } from '../services/HousesService'
import { AppState } from '../Appstate'

export default {
  name: 'HouseDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      house: computed(() => AppState.activeHouse)
    })

    onMounted(() => {
      housesService.getHouse(route.params.id)
    })

    onBeforeRouteLeave((to, from, next) => {
      if (window.confirm('Are you sure? Click Ok to continue or Cancel to stay on this page')) {
        AppState.activeHouse = {}
        next()
      }
    })

    return {
      route,
      state,
      async deleteHouse() {
        await housesService.deleteHouse(state.house._id)
        router.push({ name: 'Houses' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
