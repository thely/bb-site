export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("events/loadEvents");
    await dispatch("works/loadWorks");
  }
};
