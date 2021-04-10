export const state = () => ({
  settings: null
});

export const mutations = {
  update(state, settings) {
    state.settings = settings;
  }
};

export const actions = {
  async fetch({ commit }) {
    const settings = await this.$content('docs/settings').fetch();
    commit('update', settings);
  }
};
