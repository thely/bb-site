<template>
  <div class="page">
    <nuxt-content class="page-body" :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    // const slug = this.$route.params.slug || "index";
    const page = await $content(params.slug)
      .fetch()
      .catch(err => {
        console.log(err);
        return error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  },
  created() {
    // console.log("this is a page!");
  }
};
</script>

<style lang="scss">
h2 {
  margin-top: 1em;
  margin-bottom: 0.25em;
}
</style>
