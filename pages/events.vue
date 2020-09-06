<template>
  <div class="events-page">
    <h2>events</h2>
    <div v-if="events && events.length > 0" class="events">
      <div
        v-for="(event, key) in events"
        :key="key"
        :class="classList(event)"
        :style="generateStyle(key)"
      >
        <p>
          <a v-if="event.link" :href="event.link">{{ event.title }}</a>
          <template v-else>{{ event.title }}</template>
        </p>
        <p>{{ postDate(event.date) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const { formatPostDate } = require("~/utils/index.js");
export default {
  computed: {
    events() {
      return this.$store.state.events.list;
    }
  },

  created() {
    // console.log("this is a page!");
  },
  methods: {
    generateStyle(key) {
      let top = (key % 3) / 2;
      let left = 0;
      if (key % 5 == 0) {
        top = top * -1;
      }
      if (key % 2 == 0) {
        left = (key % 3) / 4;
      }

      let retval = `margin-top: ${top}em; margin-left: ${left}em;`;
      return retval;
    },
    postDate(d) {
      return formatPostDate(d);
    },
    classList(event) {
      let retval = "event-single";
      if (new Date(event.date) > new Date()) {
        retval += " upcoming";
      }

      return retval;
    }
  }
};
</script>

<style lang="scss">
.events {
  align-items: self-start;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  .event-single {
    border: 2px double grey;
    // float: left;
    display: inline-block;
    padding: 5px;
    // margin: 1em;
    width: 100%;
  }

  .event-single.upcoming {
    // border-style: dotted;
    // border-color: var(--link-col);
    border: 5px dotted var(--link-col);
  }
}
</style>
