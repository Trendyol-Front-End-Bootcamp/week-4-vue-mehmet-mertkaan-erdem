<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/ships">Ships</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
  margin-bottom: 20px;
  width: 100vw;
}

#nav a {
  font-size: 20px;
  font-weight: bold;
  margin: 0 20px;
  padding: 10px;
  color: #42b983 ;
  border: 1px solid #42b983;
  border-radius: 4px;
  transition: .3s;
}

#nav a:hover {
  background: rgba(66, 185, 131, .5);
  transition: .3s;
}


#nav a:active {
  background: rgba(66, 185, 131, .8);
  transition: .3s;
}

#nav a.router-link-exact-active {
  color: antiquewhite;
   background: rgba(66, 185, 131, .8);
}


</style>
