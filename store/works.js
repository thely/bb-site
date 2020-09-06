// const { sortByDate } = require("../utils/index.js");

export const state = () => ({
  pieces: [],
  code: [],
  projects: [],
  keys: ["pieces", "code", "projects"]
});

export const getters = {
  worksByCat: state => cat => {
    return state[cat];
  },
  piecesBySubcat: state => cat => {
    return state.pieces.filter(piece => piece.subcat == cat);
  },
  getWork: state => slug => {
    for (let key of state.keys) {
      const arr = state[key].filter(piece => piece.slug == slug);
      if (arr.length > 0) {
        return arr[0];
      }
    }
    throw new Error("No piece with that slug.");
    // return state[obj.cat].filter(piece => piece.slug == obj.slug);
  }
};

export const mutations = {
  updateWorks: (state, obj) => {
    for (let key of state.keys) {
      state[key] = obj[key];
    }
  }
};

export const actions = {
  async loadSection({ }, section) {
    let page;
    try {
      page = await this.$content(`works/${section}`)
        .sortBy("date", "desc")
        .fetch()
        .catch(err => {
          console.log(err);
          throw new Error("No works found");
        });
    } catch (err) {
      console.log(err);
      throw new Error("No works?");
    }

    return page;
  },
  async loadWorks({ state, commit, dispatch }) {
    let page = {};
    for (let key of state.keys) {
      page[key] = await dispatch("loadSection", key);
    }

    commit("updateWorks", page);
  }
};
