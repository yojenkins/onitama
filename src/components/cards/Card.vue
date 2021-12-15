<template>
  <article
    class="card__container"
    :class="{
      red: color === 'red',
      green: color === 'green',
      blue: color === 'blue',
    }"
  >
    <h2>{{ title }}</h2>

    <div class="move-grid">
      <div
        class="move-grid__space"
        v-for="n in 25"
        :key="n"
        :class="{ valid: isValid(n), center: n === 13 }"
      ></div>
    </div>
    <span>Starting Player: {{ startingPlayer }}</span>
  </article>
</template>

<script lang="ts">
import Vue, { PropType as PT } from "vue";

type Coords = [number, number];

export default Vue.extend({
  props: {
    validSpaces: {
      type: Array as PT<Array<Coords>>,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String as PT<"green" | "blue" | "red">,
      required: true,
    },
    startingPlayer: {
      type: String as PT<"blue" | "red">,
      required: true,
    },
  },
  computed: {
    validSpacesStrings() {
      return this.validSpaces.map((c) => coordsToString(c));
    },
  },
  methods: {
    isValid(n: number) {
      //   const nCoords = [this.xPosition(n), this.yPosition(n)];
      //   let matched = false;

      //   for (let i = 0; i < this.validSpaces.length; i++) {
      //     const space = this.validSpaces[i];
      //     const [x, y] = space;
      //     if (x === nCoords[0] && y === nCoords[1]) {
      //       matched = true;
      //       break;
      //     }
      //   }
      //   return matched;
      return this.validSpacesStrings.includes(coordsToString(indexToCoords(n)));
    },
  },
});

function coordsToString(coords: Coords) {
  return coords.reduce((acc, c) => (acc += c.toString()), "");
}

function yPosition(n: number) {
  const MIDDLE = 13;
  const distance = (MIDDLE - n) / 5;
  if (distance > 1.4) return 2;
  if (distance > 0.4) return 1;
  if (distance < -1.4) return -2;
  if (distance < -0.4) return -1;

  return 0;
}

function xPosition(distance: number) {
  if (distance % 5 === 0) return 2;
  if (distance === 13) return 0;
  return (distance % 5) - 3;
}

function indexToCoords(n: number): Coords {
  return [xPosition(n), yPosition(n)];
}
</script>

<style scoped lang="scss">
.card {
  &__container {
    border: 1px solid black;
    border-radius: 8px;

    &.green {
      border-color: green;
    }

    &.red {
      border-color: red;
    }

    &.blue {
      border-color: blue;
    }
  }
}
.move-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 150px;
  width: 150px;

  &__space {
    border: 1px solid gray;
    &.valid {
      background-color: red;
    }
    &.center {
      background-color: black;
    }
  }
}
</style>
