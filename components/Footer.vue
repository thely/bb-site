<template>
  <footer class="footer">
    <div class="footerText">
      send thoughts + brownie recipes to becky [dot] brown [at] virginia [dot]
      edu
    </div>
    <div class="socialIcons">
      <a :href="$config.social.instagram">instagram</a>
      <a :href="$config.social.github">github</a>
      <a :href="$config.social.vimeo">vimeo</a>
      <a :href="$config.social.soundcloud">soundcloud</a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  border-top: 1px dashed grey;
  font-size: 0.9em;
  margin-top: 3em;
  padding: 1em;
  width: 50%;
}
</style>
