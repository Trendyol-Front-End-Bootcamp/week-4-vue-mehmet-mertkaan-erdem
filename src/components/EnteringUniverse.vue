<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

 
  </div>
</template>

<script>
export default {
  name: "EnteringUniverse",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  padding: 20px;
  color: #000;
  background-color: #FFE81F;
  border-radius: 2px;
}


</style>
