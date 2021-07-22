<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <code>
      First try on Vue
    </code>
 
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
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

code {
  font-size: 20px;
  color: #000;
  padding: 10px;
  background-color: #FFE81F;
   border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

</style>
