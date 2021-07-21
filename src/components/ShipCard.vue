<template>
<div>
  <ul  v-for="(ship) in filteredShips" :key="ship.name">
    <router-link :to="`/ship/${ship.name}`">
    <!-- <router-link :to="{name : 'ship', params: {id: ship.id}}"> -->
      <li class="starship-item">
        <div>
      <img class="ship-image" src="../assets/starship.png"/>
        </div>
        <div class="info-container">
      <p><span>Name:</span> {{ ship.name }}</p>
      <p><span>Model:</span> {{ ship.model }}</p>
      <p><span>Rating:</span> {{ ship.hyperdrive_rating }}</p>
        </div>
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
  background-color: #1E2019;
  border: 3px solid #E2C044;
  border-radius: 10px;
    overflow: hidden;
  list-style: none;
  transition: 0.2s;
  margin: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

li:hover {
  border: 5px solid #E2C044;
  transition: 0.2s;
}

.ship-image {
  width: 100%;
  transition: 1.5s;
}

li:hover .ship-image {
  z-index: -1;
  transform: scale(1.4);
  transition: 1.5s;
}



.info-container {
  background-color: #1E2019;
  z-index: 1;
}
p {
    font-weight: bold;
    color: #D3D0CB;
}
p span {
  font-weight: bold;
  color: #E2C044;
}



a {
  text-decoration: none;
}

a:active p {
  color: #E2C044 ;
}
a:active span {
  color: #D3D0CB ;
}

a:active li {
  opacity: .5;
}
</style> 