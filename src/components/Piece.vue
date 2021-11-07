<template>
  <div
    class="piece"
    :class="{
      red: piece.color === 'red',
      blue: piece.color === 'blue',
      selected: piece.selected,
    }"
  >
    P
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
export interface PieceInfo {
  position: {
    row: number;
    col: number;
  };
  color: "red" | "blue";
  selected: boolean;
}

export default Vue.extend({
  name: "Piece",
  props: {
    piece: {
      type: Object as PropType<PieceInfo>,
    },
  },
});
</script>

<style scoped lang="scss">
.piece {
  &.red {
    color: red;
  }
  &.blue {
    color: blue;
  }
  &.selected {
    border-radius: 50%;
    border: 2px solid black;
  }
}
</style>
