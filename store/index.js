export const state = () => ({
  imageHome: "",
});


export const actions = {

}

export const mutations = {
  setImageHome(state, height) {
    state.imageHome = height > 700 ? "~/assets/img/image-profile-2.png"
      : "~/assets/img/image-profile-1.png";
  }
};
