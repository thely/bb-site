<template>
  <div
    :class="{
      pattern: true,
      running: hover
    }"
    v-html="formatText"
  ></div>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      colors: ["yellow", "red", "green"],
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet eros dolor, vestibulum tempus enim suscipit sed. Nam vitae rhoncus ligula, ac volutpat augue. Donec sed sollicitudin lectus, nec tristique lacus. Aliquam ipsum ante, euismod at malesuada at, cursus non orci. Phasellus eu nisi mauris. Donec quis luctus sapien. Fusce commodo quis neque vitae eleifend.",
        "Nam malesuada, purus nec vestibulum maximus, mauris ex hendrerit turpis, eget sodales odio erat at tellus. Mauris viverra porttitor cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam a purus neque. Quisque aliquam sem in enim facilisis, nec dapibus ante laoreet. Etiam imperdiet auctor consequat. Vestibulum pellentesque sollicitudin orci, quis mollis felis mattis id. Suspendisse velit nibh, posuere eu ultrices sed, porta sit amet sapien. Fusce egestas dapibus risus sit amet condimentum. Nullam placerat quam ut vulputate tincidunt. Sed ante urna, bibendum eu felis eu, auctor lobortis lorem. ",
        "Donec scelerisque lectus odio, at venenatis erat egestas non. Etiam porta euismod sapien. Cras quis imperdiet lectus. Sed sed erat at neque facilisis congue et vitae nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at pharetra lacus. Suspendisse mattis, quam sit amet aliquam pharetra, ex eros molestie dui, et cursus magna turpis in tortor. ",
        "Suspendisse sollicitudin id lacus et dictum. Nam dignissim justo nec purus sollicitudin, sit amet congue risus sollicitudin. Aenean sit amet lectus vel turpis aliquet scelerisque in eget nulla. Aenean velit est, ultrices at diam tristique, accumsan suscipit sem. Nunc ultrices sed elit eu egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque metus ante, at blandit massa consequat in. Mauris a lacus a massa euismod tristique pulvinar ut metus. Nam fermentum nibh pharetra elit vulputate, nec consectetur tellus laoreet. Nullam aliquet congue sagittis. ",
        "Duis vestibulum mi sit amet mi dignissim, nec porttitor dolor tempus. Vivamus quis neque ac magna aliquet venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus augue nec diam accumsan, ac facilisis est sodales. Vestibulum eu odio efficitur, condimentum quam ultrices, aliquam urna. Maecenas ante magna, elementum sed eleifend ut, dapibus in sapien. Sed blandit arcu sit amet nulla lacinia, at rhoncus arcu ultricies. Pellentesque quis diam et mi ultrices vestibulum. Aliquam tincidunt in urna vitae vestibulum. Cras facilisis dictum pellentesque. Phasellus semper libero in ullamcorper rhoncus. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet eros dolor, vestibulum tempus enim suscipit sed. Nam vitae rhoncus ligula, ac volutpat augue. Donec sed sollicitudin lectus, nec tristique lacus. Aliquam ipsum ante, euismod at malesuada at, cursus non orci. Phasellus eu nisi mauris. Donec quis luctus sapien. Fusce commodo quis neque vitae eleifend.",
        "Nam malesuada, purus nec vestibulum maximus, mauris ex hendrerit turpis, eget sodales odio erat at tellus. Mauris viverra porttitor cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam a purus neque. Quisque aliquam sem in enim facilisis, nec dapibus ante laoreet. Etiam imperdiet auctor consequat. Vestibulum pellentesque sollicitudin orci, quis mollis felis mattis id. Suspendisse velit nibh, posuere eu ultrices sed, porta sit amet sapien. Fusce egestas dapibus risus sit amet condimentum. Nullam placerat quam ut vulputate tincidunt. Sed ante urna, bibendum eu felis eu, auctor lobortis lorem. ",
        "Donec scelerisque lectus odio, at venenatis erat egestas non. Etiam porta euismod sapien. Cras quis imperdiet lectus. Sed sed erat at neque facilisis congue et vitae nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at pharetra lacus. Suspendisse mattis, quam sit amet aliquam pharetra, ex eros molestie dui, et cursus magna turpis in tortor. ",
        "Suspendisse sollicitudin id lacus et dictum. Nam dignissim justo nec purus sollicitudin, sit amet congue risus sollicitudin. Aenean sit amet lectus vel turpis aliquet scelerisque in eget nulla. Aenean velit est, ultrices at diam tristique, accumsan suscipit sem. Nunc ultrices sed elit eu egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque metus ante, at blandit massa consequat in. Mauris a lacus a massa euismod tristique pulvinar ut metus. Nam fermentum nibh pharetra elit vulputate, nec consectetur tellus laoreet. Nullam aliquet congue sagittis. ",
        "Duis vestibulum mi sit amet mi dignissim, nec porttitor dolor tempus. Vivamus quis neque ac magna aliquet venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus augue nec diam accumsan, ac facilisis est sodales. Vestibulum eu odio efficitur, condimentum quam ultrices, aliquam urna. Maecenas ante magna, elementum sed eleifend ut, dapibus in sapien. Sed blandit arcu sit amet nulla lacinia, at rhoncus arcu ultricies. Pellentesque quis diam et mi ultrices vestibulum. Aliquam tincidunt in urna vitae vestibulum. Cras facilisis dictum pellentesque. Phasellus semper libero in ullamcorper rhoncus. "
      ]
    };
  },
  computed: {
    formatText() {
      return this.textLoop(this.text);
    }
  },
  methods: {
    spanLoop(para) {
      let words = para.split(" ");
      for (let i = 0; i < words.length; i++) {
        if (this.getRandomInt(0, 10) > 8) {
          let color = this.getRandomInt(0, 2);
          let z = this.getRandomInt(-30, 30);
          let zIndex = `style="z-index: ${z};"`;
          words[
            i
          ] = `<span class="${this.colors[color]}" ${zIndex}>${words[i]}</span>`;
        }
      }

      words = words.join(" ");
      return words;
    },
    textLoop(text) {
      let retval = "";
      for (let p of text) {
        p = this.spanLoop(p);
        let cl = "";
        if (this.getRandomInt(0, 3) == 1) {
          cl = `class="highlight"`;
        }
        retval += `<p ${cl}>${p}</p>`;
      }

      return retval;
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
</script>

<style lang="scss">
.pattern {
  color: transparent;
  font-size: 0.6em;
  line-height: 0.9;
  letter-spacing: -1.2px;
  word-spacing: -3.5px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 30%;
  text-align: right;
  transform: skewX(10deg) skewY(23deg);
  transform: skewX(30deg) rotate(30deg) translateY(180px);

  animation-name: breathing;
  animation-duration: 1.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-play-state: paused;
  animation-timing-function: ease-in-out;

  p.highlight {
    display: inline;
    background-color: var(--side-colpara2);
  }

  span {
    position: relative;
  }
  span::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }

  span.yellow::after {
    background: var(--side-col1);
    width: 100%;
    height: 700%;
    margin-top: -700%;
    z-index: 1;
  }

  span.red::after {
    background: var(--bg-col);
    width: 1px;
    height: 700%;
    margin-top: -700%;
    z-index: 10;
  }

  span.green::after {
    background: var(--side-col2);
    width: 300%;
    height: 300%;
    margin-top: -300%;
    z-index: -1;
  }
}

.pattern.running {
  animation-play-state: running;
}

@keyframes breathing {
  from {
    width: 30%;
  }
  to {
    width: 40%;
  }
}
</style>
