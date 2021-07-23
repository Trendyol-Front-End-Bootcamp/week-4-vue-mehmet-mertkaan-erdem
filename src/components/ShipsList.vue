<template>
  <div class="container">
    <!-- ARAMA KISMI -->
    <input v-model="searchShips" type="text" placeholder="Search the ship" />
    <!-- Gemilerin listelendiği alan -->
    <div class="loading" v-if="isLoading">LOADING...</div>
    <ul v-else>
      <ship-card class="shipcards" :filteredShips="filteredShips"></ship-card>
    </ul>
  </div>
</template>

<script>
import ShipCard from "@/components/ShipCard.vue";

export default {
  name: "ShipsList",
  components: {
    ShipCard,
  },
  data() {
    return {
      ships: [],
      isLoading: true,
      searchShips: "",
    };
  },
  created() {
    this.fetchShips();
  },

  //API yakalamak ve filtreleme işlemleri burada gerçekleşiyor.
  methods: {
    fetchShips() {
      this.$http.get("https://swapi.dev/api/starships/").then((response) => {
        this.ships = response.data.results;
        this.isLoading = false;
      });
    },
  },
  computed: {
    filteredShips() {
      return this.ships.filter(
        (ship) =>
          ship.name.toLowerCase().includes(this.searchShips.toLowerCase()) ||
          ship.model.toLowerCase().includes(this.searchShips.toLowerCase())
      );
    },
  },
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

input {
  border: 3px solid #FFE81F;
  border-radius: 2px;
  padding: 10px;
  width: 15vw;
  text-align: center;
  line-height: 10px;
  color: #999;
  font-weight: bold;
  font-size: 15px;
}

input::placeholder {
  color: #999;
  font-weight: bold;
  font-size: 15px;
}


.shipcards {
  display: grid;
  grid-template-columns: 450px 450px;
}

.loading {
  background: #000;
  font-size: 40px;
  font-weight: bold;
  margin: 80px;
  padding: 100px;
}
</style>