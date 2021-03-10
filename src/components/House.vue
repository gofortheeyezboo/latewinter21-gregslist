<template>
  <div class="col-4">
    <router-link :to="{name: 'HouseDetails', params: {id: house._id}}" >
      <div class="card house">
        <img class="card-img-top" :src="house.imgUrl" alt="house">
        <div class="card-body">
          <h4 class="card-title">Bedrooms: {{house.bedrooms}} | Bathrooms: {{house.bathrooms}}</h4>
          <p class="card-text">Year: {{house.year}} | Price: {{house.price}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'house',
  props: {
    house: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style scoped>
.house:hover {
  transform: translateY(-5px);
  box-shadow: 1px 3px 5px rgb(94, 94, 94);
  cursor: pointer
}

.house {
  transition: all .2s;
  color: black
}
</style>
