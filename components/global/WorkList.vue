<template>
  <div class="work-list">
    <div v-for="(work, key) in works" :key="key">
      <h5 class="work-title">
        <nuxt-link :to="makeSlug(work.slug)">{{ work.title }}</nuxt-link>
      </h5>
      <p class="work-type">{{ work.subtitle }}, {{ work.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: String,
    subcat: {
      type: String,
      default: ""
    }
  },
  computed: {
    works() {
      if (this.subcat != "") {
        return this.$store.getters["works/piecesBySubcat"](this.subcat);
      }
      return this.$store.getters["works/worksByCat"](this.category);
    }
  },
  methods: {
    makeSlug(slug) {
      return `work/${slug}`;
    }
  }
};
</script>

<style lang="scss">
.work-list {
  .work-title {
    margin-bottom: 0;
    a {
      font-family: var(--header-font);
    }
  }
  .work-type {
    // font-style: italic;
    font-size: 0.95em;
    margin-left: 1em;
  }
}
</style>
