export const state = () => ({
  showComponents: false,
});


export const actions = {

}

export const mutations = {
  setComponent(state) {
    state.showComponents = state.showComponents ? false : true;
  }
};
