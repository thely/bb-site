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
          <p>{{ event.title }}</p>
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
    width: 25%;
  }
  .eventsPerYear {
    width: 75%;
  }
}
</style>
