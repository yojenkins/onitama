<template>
  <div>
    <Board />
    <Card v-for="card in cardsInPlay" :key="card.title" v-bind="card" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Board from "./Board.vue";
import Card from "./cards/Card.vue";
import { shuffleArray } from "../utils";
import { gameCards, GameCard } from "../lib";

export default Vue.extend({
  name: "Game",
  components: { Card, Board },
  data: function (): { cardsInPlay: GameCard[] } {
    return {
      cardsInPlay: [],
    };
  },
  methods: {
    setCards() {
      this.cardsInPlay = shuffleArray(gameCards).slice(0, 5);
    },
  },
  mounted() {
    this.setCards();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
