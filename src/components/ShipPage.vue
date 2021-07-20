<template>
<div>
  <!-- <ul  v-for="(ship) in filteredShips" :key="ship.name">
      <li class="starship-item">
      <img class="ship-image" src="../assets/starship.png"/>
      <p><span>Name:</span> {{ $route.params.name }}</p>
      <p><span>Model:</span> {{ ship.model }}</p>
      <p><span>Rating:</span> {{ ship.hyperdrive_rating }}</p>
      <p><span>Passengers:</span> {{ ship.passengers }}</p>
      <p><span>Max Speed:</span> {{ ship.max_atmosphering_speed }}</p>
      <p><span>Manufacturer:</span> {{ ship.manufacturer }}</p>
      <p><span>Crew:</span> {{ ship.crew }}</p>
      <p><span>Cargo Capacity:</span> {{ ship.cargo_capacity }}</p>
      </li> 
  </ul> -->
 <div> {{ $route.params.name }} </div>
 <div> {{ $route.params.model }} </div>
 <!-- <div> {{ ship.name }} </div> -->
  </div>
</template>


<script>
export default {
 name: "ShipPage",
props: [
'name',
'length',
'model'
],
    // computed: {
    //     ship() {
    //     return this.$store.getters.ship(this.name)
    //     }
    // }

}
</script>

<style>
ul {
     padding-inline-start: 0px;


}
li {
  border: 1px solid #42b983;
    overflow: hidden;
  padding: 20px;
  list-style: none;
  transition: 0.2s;
  position: relative;
  align-content: center;
  margin: 10px 10px 10px 10px;
}

li:hover {
  border: 3px solid #42b983;
  transition: 0.2s;
}
p {
    font-weight: bold;
    color: #333;
}
p span {
  font-weight: bold;
  color: #42b983;
}

.ship-image {
z-index: -1;
width: 80%;
left: 15%;
opacity: .5;
top: -5%;
position: absolute;
}
</style> 