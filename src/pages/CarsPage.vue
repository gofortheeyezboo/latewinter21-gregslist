<template>
  <div class="cars-page container">
    <div class="row">
      <div class="col text-center">
        <h1>Cars</h1>
      </div>
    </div>
    <div class="row">
      <Car v-for="carData in state.cars" :key="carData.id" :car="carData" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../Appstate'
import { carsService } from '../services/CarsService'
import Car from '../components/Car'

export default {
  name: 'CarsPage',
  setup() {
    const state = reactive({
      cars: computed(() => AppState.cars)
    })
    // NOTE this runs when the page/component is first 'mounted' to the dom
    onMounted(() => {
      carsService.getCars()
    })

    return {
      state
    }
  },
  components: {
    Car
  }
}
</script>

<style lang="scss" scoped>

</style>
