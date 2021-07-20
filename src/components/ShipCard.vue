<template>
<div>
  <ul  v-for="(ship) in filteredShips" :key="ship.name">
    <router-link :to="`/ship/${ship.name}`">
    <!-- <router-link :to="{name : 'ship', params: {id: ship.id}}"> -->
      <li class="starship-item">
      <img class="ship-image" src="../assets/starship.png"/>
      <p><span>Name:</span> {{ ship.name }}</p>
      <p><span>Model:</span> {{ ship.model }}</p>
      <p><span>Rating:</span> {{ ship.hyperdrive_rating }}</p>
      </li> 
    </router-link>
  </ul>
  </div>
</template>


<script>
export default {
 name: "ShipCard",
 props:["filteredShips"],

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
top: -5%;
position: absolute;
}

a {
  text-decoration: none;
}

a:active p {
  color: #42b983 ;
}
a:active span {
  color: #333 ;
}

a:active li {
  opacity: .5;
}
</style> 