<template>
  <div class="work">
    <h1>{{ work.title }}</h1>
    <h2 v-if="work.category == 'composition'" class="work-subtitle">
      {{ work.subtitle }}, {{ work.date }}
    </h2>
    <pre v-if="work.category == 'composition'" class="excerpt">
      {{ makeExcerpt(work.excerpt) }}
    </pre>
    <h3 v-if="work.category == 'code'">
      <a v-if="work.link" :href="work.link">view site</a>
      <template v-if="work.link && work.code_link"> - </template>
      <a v-if="work.code_link" :href="work.code_link">view code</a>
    </h3>
    <nuxt-content class="page-body" :document="work" />
  </div>
</template>

<script>
import { buildMeta } from "~/utils/index.js";

export default {
  computed: {
    work() {
      try {
        return this.$store.getters["works/getWork"](this.$route.params.slug);
      } catch (err) {
        return this.$nuxt.error({ statusCode: 404, message: err });
      }
    }
  },
  methods: {
    makeExcerpt(text) {
      return text.trim();
    }
  },
  head() {
    return buildMeta({
      base: this.$config.baseUrl,
      title: this.work.title,
      description: this.work.prefer_meta
        ? this.work[this.work.prefer_meta]
        : this.work.subtitle || this.work.excerpt,
      image: this.work.image || "",
      url: "work/" + this.$route.params.slug,
      type: "website"
    });
  }
};
</script>

<style lang="scss">
.work {
  .excerpt {
    border-left: 4px solid var(--side-colpara);
    font-style: italic;
    margin-left: 0.5em;
    margin-top: 1em;
    padding-left: 0.8em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    white-space: pre-line;
  }
  p,
  ul {
    margin-left: 0.5em;
  }
  .gallery {
    margin-left: -0.5em;
  }
  h1 {
    margin-bottom: 0;
  }
  h2 {
    color: var(--body-col);
    font-size: 1.5em;
    margin-top: 0;
  }
  h3 {
    font-size: 1.3em;
    margin-bottom: 0;
    margin-top: 0.6em;
  }

  iframe {
    max-width: 100%;
  }
}
</style>
