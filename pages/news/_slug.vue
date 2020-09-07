<template>
  <div class="single-news">
    <h1>{{ page.title }}</h1>
    <h3>{{ postDate(page.createdAt) }}</h3>
    <div class="tags">
      <span v-for="(tag, key) in page.tags" :key="key">{{ tag }}</span>
    </div>

    <nuxt-content class="page-body" :document="page" />
  </div>
</template>

<script>
const { buildMeta, formatPostDate } = require("~/utils/index.js");

export default {
  async asyncData({ $content, params, error }) {
    const page = await $content("news", params.slug)
      .fetch()
      .catch(err => {
        console.log(err);
        return error({ statusCode: 404, message: "Page not found" });
      });

    console.log("our page is???");
    console.log(page);

    return {
      page
    };
  },
  methods: {
    postDate(d) {
      return formatPostDate(d);
    }
  },
  head() {
    return buildMeta({
      base: this.$config.baseUrl,
      title: this.page.title,
      description: this.page.description || "news article of some kind",
      image: "/images/becky-brown.jpg",
      url: this.$route.params.slug,
      type: "website"
    });
  }
};
</script>

<style lang="scss">
.single-news {
  h1 {
    margin-bottom: 0;
  }
  h2 {
    margin-top: 1em;
    margin-bottom: 0.25em;
  }
  .tags {
    display: flex;
    margin-bottom: 1em;

    span {
      border: 1px solid var(--side-colpara);
      color: var(--side-colpara);
      display: inline-block;
      font-size: 0.9em;
      margin-right: 0.5em;
      padding: 0.25em;
    }
  }
}
</style>
