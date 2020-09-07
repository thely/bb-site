<template>
  <div class="works">
    <h1>Work</h1>
    <h2>Pieces</h2>
    <WorkList category="pieces" />
    <h2>Projects</h2>
    <WorkList category="projects" />
    <h2>Sites/Code</h2>
    <WorkList category="code" />
  </div>
</template>

<script>
const { buildMeta } = require("~/utils/index.js");

export default {
  head() {
    return buildMeta({
      base: this.$config.baseUrl,
      title: "Works",
      description: "list of all pieces, projects, and websites",
      image: "/images/becky-brown.jpg",
      url: "works",
      type: "website"
    });
  }
};
</script>

<style></style>
