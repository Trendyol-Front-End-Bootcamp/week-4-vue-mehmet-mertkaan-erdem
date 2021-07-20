<template>
  <div class="container">
      <input v-model='searchShips' type="text" placeholder="Search the ship"/>
      <ul>
      <!-- <router-link class="project-link" :to="{ path: `projects/${url}`, params: { testString: 'a dynamic string' } }" exact> -->
      <ship-card class="shipcards" :filteredShips="filteredShips"></ship-card>
       <!-- <li class="starship-item" v-for="(ship, index) in filteredShips" :key="index">
          <img class="ship-image" src="../assets/starship.png"/>
        <p><span>Name:</span> {{ ship.name }}</p>
        <p><span>Model:</span> {{ ship.model }}</p>
        <p><span>Rating:</span> {{ ship.hyperdrive_rating }}</p>
      </li> -->
      </ul>
  </div>
</template>

<script>
import ShipCard from "@/components/ShipCard.vue"

export default {
  name: "ShipsList",
  components: {
    ShipCard
  },
  data() {
    return {
      ships: [],
      searchShips: '',
    };
  },

  created() {
    this.fetchShips();
  },
  methods: {
    fetchShips() {
      this.$http.get("https://swapi.dev/api/starships/").then((response) => {
        this.ships = response.data.results;
      });
    },
  },
  computed: {
    filteredShips() {
      return this.ships.filter((ship) => (
        ship.name.includes(this.searchShips) || ship.model.includes(this.searchShips)
      ));
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shipcards {
  display: grid;
  grid-template-columns: 450px 450px ;
}
</style>