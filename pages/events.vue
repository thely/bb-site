<template>
  <div class="events-page">
    <h2>Events</h2>
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
        <p class="event-details">
          <template v-if="!event.start">⏱️ {{ postDate(event.date) }}</template>
          <template v-else
            >⌛ {{ postDate(event.start) }} -
            {{ postDate(event.end) }}</template
          >
          <template v-if="event.location"
            ><br />
            📌 {{ event.location }}</template
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const { formatDateSmall, buildMeta } = require("~/utils/index.js");
export default {
  computed: {
    years() {
      return this.$store.state.events.years;
    },
    events() {
      return this.$store.state.events.list;
    }
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
    eventsByYear(year) {
      return this.$store.getters["events/eventsByYear"](year);
    },
    postDate(d) {
      return formatDateSmall(d);
    },
    classList(event) {
      let retval = "event-single";
      if (new Date(event.date) > new Date()) {
        retval += " upcoming";
      }

      return retval;
    }
  },
  head() {
    return buildMeta({
      base: this.$config.baseUrl,
      title: "Events",
      description: "list of past and upcoming concerts and showings",
      image: "/images/becky-brown.jpg",
      url: "events",
      type: "website"
    });
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
    background-color: var(--bg-col);
    border: 2px double grey;
    // float: left;
    display: inline-block;
    padding: 5px;
    // margin: 1em;
    width: 100%;
  }

  .event-details {
    font-size: 0.8em;
  }

  div:nth-child(2n) {
    transform: rotate(-1deg);
  }
  div:nth-child(2n + 1) {
    transform: rotate(2deg);
  }
  div:nth-child(3n) {
    transform: rotate(-3deg);
  }
  div:nth-child(8n) {
    transform: rotate(3deg);
  }

  .event-single.upcoming {
    border: 5px dotted var(--link-col);
  }
}
</style>
