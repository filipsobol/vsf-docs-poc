export const state = () => ({
  doc: null
});

export const mutations = {
  update(state, doc) {
    state.doc = doc;
  }
};

export const actions = {
  async fetch({ commit }, { version, slug }) {
    const doc = await this.$content(`docs/${version}/${slug}`).fetch();
    commit('update', doc);
  }
};
