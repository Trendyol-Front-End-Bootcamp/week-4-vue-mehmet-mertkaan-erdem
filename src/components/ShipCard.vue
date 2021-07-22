<template>
<div>

  <!-- Gemilerin ana sayfada listelenmesinde kullanılan component ve maplenmesi -->
  <ul  v-for="(ship) in filteredShips" :key="ship.name">
    <!-- single page'lere link verilmesi -->
    <router-link :to="`/ship/${ship.name}`">
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

<style scoped>
ul {
     padding-inline-start: 0px;
}
li {
  background-color: #000;
  border: 3px solid #000;
  border-radius: 10px;
    overflow: hidden;
  list-style: none;
  transition: 0.2s;
  margin: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  transition: 1s;
}

li:hover {
  border: 3px solid #FFE81F;
  transition: 1s;
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
  background-color: #000;
  z-index: 1;
}
p {
    font-weight: bold;
    color: #D3D0CB;
}
p span {
  color: #FFE81F;
}



a {
  text-decoration: none;
}

a:active p {
  color: #FFE81F ;
}
a:active span {
  color: #D3D0CB ;
}

a:active li {
  opacity: .9;
}
</style> 