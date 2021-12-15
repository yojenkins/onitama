<template>
  <Card
    color="red"
    :validSpaces="[
      [-1, -1],
      [1, 1],
      [2, 0],
    ]"
    title="Rabbit"
  />
</template>

<script>
import Vue from "vue";
import Card from "./Card.vue";

export default Vue.extend({
  name: "Rabbit Card",
  components: { Card },
});
</script>
