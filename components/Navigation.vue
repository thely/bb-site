<template>
  <nav class="navigation">
    <ul>
      <li><nuxt-link to="/works">works</nuxt-link></li>
      <li><nuxt-link to="/news">news</nuxt-link></li>
      <li><nuxt-link to="/events">events</nuxt-link></li>
      <li><nuxt-link to="/about">about</nuxt-link></li>
      <li><nuxt-link to="/cv">c.v.</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  display: inline-block;
}
</style>
