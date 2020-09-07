<template>
  <div class="home">
    <nuxt-content class="page-body" :document="post" />
  </div>
</template>

<script>
import { buildMeta } from "~/utils/index.js";

export default {
  async asyncData({ $content, params, error }) {
    // const slug = this.$route.params.slug || "index";
    const post = await $content("home")
      .fetch()
      .catch(err => {
        console.log(err);
        return error({ statusCode: 404, message: "Page not found" });
      });

    return {
      post
    };
  },
  head() {
    return buildMeta({
      base: this.$config.baseUrl,
      title: this.post.title,
      description: this.post.description,
      image: this.post.image,
      url: "",
      type: "website"
    });
  }
};
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
