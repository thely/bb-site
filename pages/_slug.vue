<template>
  <div class="page">
    <h1>{{ page.title }}</h1>
    <nuxt-content class="page-body" :document="page" />
  </div>
</template>

<script>
const { buildMeta } = require("~/utils/index.js");

export default {
  async asyncData({ $content, params, error }) {
    console.log(params);
    // const slug = this.$route.params.slug || "index";
    let slug = params.slug;
    if (params.slug == "news") {
      slug = "news-home";
    }
    const page = await $content(slug)
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
  head() {
    return buildMeta({
      base: this.$config.baseUrl,
      title: this.page.title,
      description: this.page.description,
      image: "/images/becky-brown.jpg",
      url: this.$route.params.slug,
      type: "website"
    });
  }
};
</script>

<style lang="scss">
h2 {
  margin-top: 1em;
  margin-bottom: 0.25em;
}
</style>
