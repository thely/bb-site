<template>
  <div class="work">
    <h1>{{ work.title }}</h1>
    <h3>{{ work.subtitle }}, {{ work.date }}</h3>
    <blockquote>{{ work.excerpt }}</blockquote>
    <nuxt-content class="page-body" :document="work" />
  </div>
</template>

<script>
export default {
  computed: {
    work() {
      return this.$store.getters["works/getWork"](this.$route.params.slug);
    }
  },
  mounted() {
    let elems = document.querySelectorAll("p");
    elems.forEach(e => {
      // let num = Math.random() * 4;
      // e.style.marginLeft = `${num}em`;
      // num = Math.random();
      // e.style.transform = `rotate(${num}deg)`;
    });
  }
};
</script>

<style lang="scss">
// .work {
//   p,
//   h3,
//   ul,
//   blockquote {
//     margin-bottom: 1em;
//     // transform: rotate(0.5deg) skewY(-2deg);
//     transform: skewY(-1deg);
//   }
// }
</style>
