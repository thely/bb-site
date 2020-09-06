<template>
  <div class="color-picker">
    <ul>
      <li
        v-for="color of colors"
        :key="color"
        :class="classList(color)"
        @click="$colorMode.preference = color"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["light", "dark"]
    };
  },
  methods: {
    classList(color) {
      return `picker-node ${color}`;
    }
  }
};
</script>

<style lang="scss">
.color-picker {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1em;
  z-index: 20;

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .picker-node {
    border: 3px double grey;
    margin-bottom: 0.25em;
    transform: skewY(-10deg);
    width: 1.8em;
    height: 1.8em;

    &.dark {
      background-color: #171111;
    }
    &.light {
      background-color: white;
    }
  }
}
</style>
