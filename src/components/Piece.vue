<template>
  <div
    class="piece"
    :class="{ red: piece.color === 'red', blue: piece.color === 'blue' }"
  >
    P
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "Piece",
  props: {
    piece: {
      type: Object as PropType<{ row: number; col: number; color: string }>,
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
}
</style>
