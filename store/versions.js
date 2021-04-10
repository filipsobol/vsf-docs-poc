export const state = () => ({
  versions: {}
});

export const mutations = {
  update(state, { version, settings }) {
    state.versions = {
      ...state.versions,
      [version]: settings
    };
  }
};

export const actions = {
  async fetch({ commit }, { version }) {
    const settings = await this.$content(`docs/${version}/settings`).fetch();
    commit('update', { version, settings });
  }
};
