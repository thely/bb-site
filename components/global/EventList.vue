<template>
  <div v-if="years" class="eventsList">
    <div v-for="(year, key) in years" :key="key" class="yearEntry">
      <p class="left">{{ year }}</p>
      <div class="eventsPerYear">
        <div
          v-for="(event, ekey) in eventsByYear(year)"
          :key="ekey"
          class="right"
        >
          <h5>{{ event.title }}</h5>
          <p>
            <span v-if="event.venue">{{ event.venue }} - </span
            >{{ event.location }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    years() {
      return this.$store.state.events.years;
    }
  },
  methods: {
    eventsByYear(year) {
      return this.$store.getters["events/eventsByYear"](year);
    }
  }
};
</script>

<style lang="scss">
.eventsList {
  .yearEntry {
    display: flex;
  }

  .left {
    padding-right: 2em;
    text-align: right;
    width: 25%;
  }
  .eventsPerYear {
    width: 75%;
  }

  h5 {
    margin-bottom: 0;
  }
}
</style>
