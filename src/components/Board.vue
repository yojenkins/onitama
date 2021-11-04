<template>
  <div class="game-board">
    <div
      class="game-board__space"
      v-for="n in 25"
      :key="n"
      :class="{ home: n === 3 || n === 23 }"
    >
      <Piece v-if="getPieceIndex(n)" :piece="getPieceIndex(n)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Piece from "./Piece.vue";

export default Vue.extend({
  components: { Piece },
  data: function () {
    return {
      pieces: [
        { row: 0, col: 0, color: "red" },
        { row: 0, col: 1, color: "red" },
        { row: 0, col: 2, color: "red", master: true },
        { row: 0, col: 3, color: "red" },
        { row: 0, col: 4, color: "red" },
        { row: 4, col: 0, color: "blue" },
        { row: 4, col: 1, color: "blue" },
        { row: 4, col: 2, color: "blue", master: true },
        { row: 4, col: 3, color: "blue" },
        { row: 4, col: 4, color: "blue" },
      ],
    };
  },
  methods: {
    getPieceIndex(n: number) {
      let match = null;
      const row = Math.floor((n % 5 === 0 ? n - 1 : n) / 5);
      let col = n % 5;
      col === 0 ? (col = 4) : (col = col - 1);

      for (let i = 0; i < this.pieces.length; i++) {
        const piece = this.pieces[i];
        if (piece.row === row && piece.col === col) {
          match = piece;
          break;
        }
      }

      return match;
    },
  },
});
</script>

<style scoped lang="scss">
.game-board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 600px;
  width: 600px;

  &__space {
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    &.home {
      background-color: gray;
    }
  }
}
</style>
