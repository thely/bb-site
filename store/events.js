const { sortByDate } = require("../utils/index.js");

export const state = () => ({
  list: [],
  years: []
});

export const getters = {
  eventsByYear: state => year => {
    let retval = state.list.filter(
      evt => new Date(evt.date).getUTCFullYear() == year
    );
    return retval;
  }
};

export const mutations = {
  updateEvents: (state, evts) => {
    state.list = evts;
  },
  updateYears: (state, evts) => {
    let years = [];
    for (let e of evts) {
      const year = new Date(e.date).getUTCFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
    }
    state.years = years;
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

    const events = sortByDate(page.events).reverse();
    commit("updateEvents", events);
    commit("updateYears", events);
    return events;
  }
};
