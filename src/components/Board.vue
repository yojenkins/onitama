<template>
  <div class="game-board">
    <div
      class="game-board__space"
      v-for="n in 25"
      :key="n"
      :class="{ home: n === 3 || n === 23 }"
      @click="selectSquare(n)"
    >
      <Piece v-if="getPieceIndex(n)" :piece="getPieceIndex(n)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Piece, { PieceInfo } from "./Piece.vue";
enum PlayerColor {
  blue = "blue",
  red = "red",
}

export default Vue.extend({
  components: { Piece },
  data: function () {
    return {
      selectedPiece: null,
      pieces: [
        {
          position: { row: 0, col: 0 },
          color: PlayerColor.red,
          selected: false,
        },
        {
          position: { row: 0, col: 1 },
          color: PlayerColor.red,
          selected: false,
        },
        {
          position: { row: 0, col: 2 },
          color: PlayerColor.red,
          selected: false,
          master: true,
        },
        {
          position: { row: 0, col: 3 },
          color: PlayerColor.red,
          selected: false,
        },
        {
          position: { row: 0, col: 4 },
          color: PlayerColor.red,
          selected: false,
        },
        {
          position: { row: 4, col: 0 },
          color: PlayerColor.blue,
          selected: false,
        },
        {
          position: { row: 4, col: 1 },
          color: PlayerColor.blue,
          selected: false,
        },
        {
          position: { row: 4, col: 2 },
          color: PlayerColor.blue,
          selected: false,
          master: true,
        },
        {
          position: { row: 4, col: 3 },
          color: PlayerColor.blue,
          selected: false,
        },
        {
          position: { row: 4, col: 4 },
          color: PlayerColor.blue,
          selected: false,
        },
      ],
    };
  },
  methods: {
    selectSquare(n: number) {
      const piece = this.getPieceIndex(n);
      if (piece) {
        if (this.selectedPiece) {
          const prevSelection = this.getPieceIndex(this.selectedPiece);
          if (prevSelection) prevSelection.selected = false;
        }
        this.selectedPiece = n;
        piece.selected = true;
        return;
      }

      if (this.selectedPiece) {
        if (this.isValidMove()) {
          this.getPieceIndex(this.selectedPiece).position =
            this.indexToRowColPosition(n);
          this.selectedPiece = n;
        }
      }
    },

    isValidMove() {
      return true;
    },

    indexToRowColPosition(n: number) {
      const row = Math.floor((n % 5 === 0 ? n - 1 : n) / 5);
      let col = n % 5;
      col === 0 ? (col = 4) : (col = col - 1);

      return { row, col };
    },

    getPieceIndex(n: number): PieceInfo | null {
      let match = null;
      const { row, col } = this.indexToRowColPosition(n);

      for (let i = 0; i < this.pieces.length; i++) {
        const piece = this.pieces[i];
        const { position } = piece;
        if (position.row === row && position.col === col) {
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
