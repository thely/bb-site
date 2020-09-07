<template>
  <div class="cvItem">
    <div class="left"><slot name="left" /></div>
    <div class="right">
      <h4><slot name="ti" /></h4>
      <p class="loc"><slot name="loc" /></p>
      <p><slot name="desc" /></p>
    </div>
  </div>
</template>

<script>
export default {
  // created() {
  //   console.log("this cvline exists!");
  // }
};
</script>

<style lang="scss">
.cvItem {
  display: flex;
  margin-bottom: 0.5em;

  .left {
    font-size: 0.9em;
    float: left;
    margin-right: 2em;
    // max-width: 15%;
    text-align: right;
    width: 20%;
  }

  .right {
    width: 75%;

    h4 {
      margin-bottom: 0;
    }
  }

  .loc {
    font-style: italic;
  }
}
</style>
