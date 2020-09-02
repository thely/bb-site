<template>
  <div class="cvItem">
    <div class="left"><slot name="left" /></div>
    <div class="right">
      <h3><slot name="ti" /></h3>
      <p><slot name="loc" /></p>
      <p><slot name="desc" /></p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("this cvline exists!");
  }
};
</script>

<style lang="scss">
.cvItem {
  display: flex;

  .left {
    float: left;
    width: 25%;
  }
}
</style>
