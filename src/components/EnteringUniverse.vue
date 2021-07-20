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
h3 {
  margin: 40px 0 0;
}

code {
  font-size: 20px;
}

a {
  color: #42b983;
}
</style>
