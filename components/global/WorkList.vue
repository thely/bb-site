<template>
  <div class="work-list">
    <div v-for="(work, key) in works" :key="key" class="single-work">
      <div
        v-if="work.image"
        class="work-image"
        :style="makeStyle(work.image)"
      ></div>
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
    },
    makeStyle(bg) {
      return `background-image: url(${bg});`;
    }
  }
};
</script>

<style lang="scss">
.work-list {
  border-left: 1px dashed var(--side-colpara);
  margin-left: 0.5em;
  padding-left: 1.5em;
  margin-top: 1em;

  .single-work {
    margin-bottom: 1em;

    &::after {
      clear: both;
      content: "";
      display: table;
    }
  }

  .work-title {
    margin-bottom: 0;
    a {
      font-family: var(--header-font);
    }
  }
  .work-type {
    font-size: 0.95em;
    margin-left: 1em;
  }
  .work-image {
    background-color: white;
    background-position: center;
    background-size: cover;
    float: left;
    margin-right: 1em;
    width: 4em;
    height: 4em;
  }
}
</style>
