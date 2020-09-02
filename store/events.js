export const state = () => ({
  list: []
});

export const getters = {};

export const mutations = {
  updateEvents: (state, evts) => {
    state.list = evts;
  }
};

export const actions = {
  async loadEvents({ commit }) {
    let page;
    try {
      page = await this.$content("events")
        .fetch()
        .catch(err => {
          console.log(err);
          throw new Error("No events found");
        });
    } catch (err) {
      console.log(err);
      throw new Error("No events?");
    }

    for (let i = 0; i < page.events.length; i++) {
      page.events.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
      });
    }

    const events = page.events.reverse();
    commit("updateEvents", events);

    return events;
  }
};
