<template>
  <div class="car col-4">
    <div class="card">
      <img class="card-img-top" :src="car.imgUrl" alt="car">
      <div class="card-body">
        <h4 class="card-title">{{car.make}} | {{car.model}}</h4>
        <p class="card-text">{{car.year}} | {{car.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'car',
  props: {
    car: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
