<template>
  <div>
    <Navigation />
    <nuxt class="page-wrap" />
    <Footer />
    <SideGraphic :hover="hover" />
    <ColorModePicker />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  },
  watch: {
    $route() {
      this.hover = false;
      let l = this;
      setTimeout(function() {
        l.makeHovers();
      }, 300);
      // });
    }
  },
  mounted() {
    this.makeHovers();
  },
  methods: {
    makeHovers() {
      let links = document.querySelectorAll("a");
      for (let link of links) {
        link.addEventListener("mouseenter", this.listener);
        link.addEventListener("mouseleave", this.listener);
      }
    },
    listener(e) {
      if (e.type == "mouseenter") {
        this.hover = true;
      } else if (e.type == "mouseleave") {
        this.hover = false;
      }
    }
  }
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.page-wrap {
  margin-left: 20px;
  position: relative;
  width: 50%;
  z-index: 100;

  p,
  h3,
  h4,
  ul li,
  blockquote {
    // transform: rotate(0.5deg) skewY(-2deg);
    transform: skewY(-1deg);
  }
  p,
  ul,
  blockquote {
    margin-bottom: 1em;
  }
}

@media (max-width: 650px) {
  .page-wrap {
    margin-left: 0;
    padding: 1em;
    width: 100%;
  }
  .pattern {
    opacity: 25%;
  }
  .color-picker {
    display: none;
  }
  .navigation ul li:first-child {
    margin-right: 0.6em !important;
  }
  .footer {
    width: 100% !important;
  }
  .events {
    grid-template-columns: 2fr 2fr !important;
  }
  iframe {
    height: auto;
    max-width: 100%;
  }
}
</style>
