<template>
  <div class="newsList">
    <client-only>
      <ul v-if="news && news.length > 0">
        <li v-for="(n, key) in news" :key="key">
          <h5>
            <nuxt-link :to="n.path">{{ n.title }}</nuxt-link>
          </h5>
          <p>{{ postDate(n.createdAt) }}</p>
        </li>
      </ul>
    </client-only>
  </div>
</template>

<script>
const { formatPostDate } = require("~/utils/index.js");

export default {
  async fetch() {
    const news = await this.$content("news")
      .sortBy("createdAt", "desc")
      .fetch()
      .catch(err => {
        console.log(err);
        // return this.error({ statusCode: 404, message: "Page not found" });
      });

    console.log("ourn ews is...");
    console.log(news);

    this.news = news;
  },
  data() {
    return {
      news: []
    };
  },
  mounted() {
    console.log("we're mounted!");
  },
  created() {
    console.log("we're created!");
  },
  methods: {
    postDate(d) {
      return formatPostDate(d);
    }
  }
};
</script>

<style lang="scss">
.newsList {
  ul {
    list-style-type: none;
    // padding-left: 0;
  }
  h5 a {
    font-family: var(--header-font);
  }
}
</style>
