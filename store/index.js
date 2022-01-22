export const state = () => ({
  imageHome: "",
});


export const actions = {

}

export const mutations = {
  setImageHome(state, height) {
    state.imageHome = height > 700 ? "image-profile-2.png"
      : "image-profile-1.png";
  }
};
