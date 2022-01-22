<template>
  <div class="h-screen flex flex-col items-center relative">
    <img
      src="../assets/logos/my-logo-mobile..svg"
      alt="logo-mobile"
      class="pb-2"
    />
    <h1 class="text-center font-bold text-name text-gray-350 pb-2">
      Lucas García Bertaina
    </h1>
    <h2 class="text-center font-normal text-proffesion text-green-750 pb-2">
      FULLSTACK WEB DEVELOPER
    </h2>

    <div class="w-screen bg-emerald-550 relative">
      <img
        class="my-0 mx-auto w-full"
        alt="profile-photo"
        :src="'../assets/img/' + this.imageHome"
      />
      <div
        class="bg-gradient-to-b from-transparent via-emerald-950 to-emerald-550 w-screen h-20 z-10 absolute bottom-0 flex flex-col justify-end items-center"
      >
        <img class="w-7 h-7" src="../assets/logos/arrow.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: {},
  data: () => {
    return {
      imageHome: "",
    };
  },
  mounted() {
    this.setImageHome();
  },
  methods: {
    setImageHome() {
      this.imageHome = this.$store.state.imageHome;
    },
  },
};
</script>
