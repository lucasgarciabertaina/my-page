<template>
  <div class="h-screen flex flex-col items-center relative">
    <img
      src="../assets/logos/my-logo-mobile.svg"
      class="pt-5 pb-2 desktop:hidden"
      :class="windowHeight"
    />
    <div
      class="absolute top-0 bottom-auto bg-gradient-to-b from-black via-black to-transparent w-full h-56 hidden desktop:block"
    ></div>
    <h1
      class="text-center font-bold text-name text-gray-350 pt-4 z-10 desktop:pt-10 desktop:text-5xl"
    >
      Lucas García Bertaina
    </h1>
    <h2
      class="text-center font-normal text-proffesion text-green-750 z-10 desktop:pt-3"
    >
      FULLSTACK WEB DEVELOPER
    </h2>

    <div class="w-full relative z-10">
      <img
        class="mx-auto w-full z-10 desktop:w-96"
        alt="profile-photo"
        src="../assets/img/image-profile-small.png"
      />
      <div
        class="bg-gradient-to-b from-transparent via-emerald-950 to-emerald-550 w-full h-20 z-20 absolute bottom-0 flex flex-col justify-end items-center"
      >
        <img class="w-7 h-7" src="../assets/logos/arrow.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: {
    windowHeight: { type: String, default: "block" },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
