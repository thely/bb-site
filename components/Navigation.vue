<template>
  <nav class="navigation">
    <ul>
      <li>
        <nuxt-link to="/">becky</nuxt-link>
      </li>
      <li><nuxt-link to="/works">works</nuxt-link></li>
      <!-- <li><nuxt-link to="/news">news</nuxt-link></li> -->
      <li><nuxt-link to="/events">events</nuxt-link></li>
      <li><nuxt-link to="/about">about</nuxt-link></li>
      <!-- <li><nuxt-link to="/cv">c.v.</nuxt-link></li> -->
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navigation {
  margin-bottom: 3em;
  position: relative;
  width: 50%;
  z-index: 100;
  // margin-left: 1em;

  ul {
    list-style-type: none;
    // margin-left: 1em;
    padding-left: 0;
  }

  ul li {
    display: inline-block;
    a {
      background-color: transparent;
      border: 0px solid transparent;
      // border: 2px solid #ffb5a9;
      // border-top: 0px solid transparent;
      display: block;
      font-family: var(--header-font);
      padding: 0.5em;
      position: relative;
      text-decoration: none;
    }

    a::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 5px double var(--header-col);
      border-top: 0px solid transparent;
      // transition: padding-bottom 0.5s;
      transition: height 0.5s;
      z-index: -1;
    }

    a.nuxt-link-exact-active::after {
      // padding-bottom: 2em;
      height: 150%;
    }

    a:hover::after {
      // padding-bottom: 5em;
      height: 100vh;
      transition: height 5s;
      // transition: padding-bottom 5s;
    }
  }

  ul li:first-child {
    margin-left: 0.6em;
    margin-right: 2em;
  }

  ul li:first-child a {
    color: var(--header-col);

    &:after {
      display: none;
    }
  }
}
</style>
