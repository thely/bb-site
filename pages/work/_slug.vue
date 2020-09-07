<template>
  <div class="work">
    <h1>{{ work.title }}</h1>
    <h2 v-if="work.category == 'composition'" class="work-subtitle">
      {{ work.subtitle }}, {{ work.date }}
    </h2>
    <blockquote v-if="work.category == 'composition'" class="excerpt">
      {{ work.excerpt }}
    </blockquote>
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
      return this.$store.getters["works/getWork"](this.$route.params.slug);
    }
  },
  head() {
    return buildMeta({
      base: this.$config.baseUrl,
      title: this.work.title,
      description: this.work.subtitle || this.work.excerpt,
      image: this.work.image || "",
      url: "work/" + this.$route.params.slug,
      type: "website"
    });
  }
  // mounted() {
  //   let elems = document.querySelectorAll("p");
  //   elems.forEach(e => {
  //     // let num = Math.random() * 4;
  //     // e.style.marginLeft = `${num}em`;
  //     // num = Math.random();
  //     // e.style.transform = `rotate(${num}deg)`;
  //   });
  // }
};
</script>

<style lang="scss">
.work {
  .excerpt {
    border-left: 4px solid var(--side-colpara);
    margin-left: 0.5em;
    margin-top: 1em;
    padding-left: 0.8em;
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
