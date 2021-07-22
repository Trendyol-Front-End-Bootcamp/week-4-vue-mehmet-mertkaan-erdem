<template>
  <div>
    <!-- Geminin detay sayfası -->
    <div class="loading" v-if="isLoading">LOADING...</div>
    <ul v-else v-for="ship in filteredShips" :key="ship.name">
        <li class="starship-item">
        <p><span>Name:</span> {{ $route.params.name }}</p>
        <p><span>Model:</span> {{ ship.model }}</p>
        <p><span>Rating:</span> {{ ship.hyperdrive_rating }}</p>
        <p><span>Passengers:</span> {{ ship.passengers }}</p>
        <p><span>Max Speed:</span> {{ ship.max_atmosphering_speed }}</p>
        <p><span>Manufacturer:</span> {{ ship.manufacturer }}</p>
        <p><span>Crew:</span> {{ ship.crew }}</p>
        <p><span>Cargo Capacity:</span> {{ ship.cargo_capacity }}</p>
        </li> 
    </ul>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "ShipPage",
  data() {
    return {
      ships: [],
      isLoading: true,
    }
  },
  props: [
    'name',
    'length',
    'model'
  ],
  created() {
    let url = `https://swapi.dev/api/starships/?search=${this.name}`;
    axios.get(url).then(response => (
      this.ships = response.data.results,
      this.isLoading = false
    )).catch(err => console.error(err));
  
  },

  //model ve isme göre filtreleme
  computed: {
    filteredShips() {
      return this.ships.filter((ship) => (
        ship.name === this.name || ship.model === this.model
      ))
    }
  }

}

</script>


<style scoped>
ul {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
li {
  background-color: #000;
  border: 3px solid #000;
  border-radius: 10px;
    overflow: hidden;
  list-style: none;
  transition: 0.2s;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  transition: 1s;
  width: 30%;
}

li:hover {
  border: 3px solid #FFE81F;
  transition: 2s;
}

.info-container {
  background-color: #000;
}


p {
    font-weight: bold;
    color: #D3D0CB;
}
p span {
  color: #FFE81F;
}
.loading {
  background: #000;
  font-size: 40px;
  font-weight: bold;
  margin: 80px;
  padding: 100px;
}
</style> 