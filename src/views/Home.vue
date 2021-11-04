<template>
  <div class="home">
    <Game />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Game from "@/components/Game.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    Game,
  },
});
</script>
