<template>
  <div class="about-img-block">
    <p>
      <img src="/images/becky-left.jpg" />
      <img src="/images/becky-right.jpg" />
    </p>
    <cite
      >photo credit:
      <a href="https://jamesscheuren.com/">James Scheuren</a></cite
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-img-block {
  margin-bottom: 1em;
  transform: skewY(0deg);

  p {
    display: flex;
    margin-bottom: 0.2em;
    transform: skewY(0deg);

    img {
      width: 50%;
    }
  }

  cite {
    display: block;
    font-size: 0.85em;
    text-align: right;
  }
}
</style>
