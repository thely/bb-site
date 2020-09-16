<template>
  <div class="error_container">
    <div class="page individual error">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <p>
        No content at this link could be found.
        <nuxt-link to="/">Go back to the home page.</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "default" // you can set a custom layout for the error page
};
</script>

<style lang="scss" scoped>
.individual.error {
  margin: 0 auto;
  max-width: 800px;
}
</style>
