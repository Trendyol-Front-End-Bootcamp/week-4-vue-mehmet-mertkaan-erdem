<template>
  <div class="shipcards">
    <ships-list></ships-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ShipsList from "@/components/ShipsList.vue";

export default {
  name: "Ships",
  components: {
    ShipsList,
  },
};
</script>
