<template>
  <div v-if="events && events.length > 0" class="eventsList">
    <div v-for="(event, key) in events" :key="key">
      <p>{{ event.title }}</p>
      <p>{{ event.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    try {
      const evts = await this.$store.dispatch("events/loadEvents");
      this.events = evts;
    } catch (e) {
      console.log("failed to get events");
      console.log(e);
    }
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    console.log("this is a page!");
  }
};
</script>

<style></style>
