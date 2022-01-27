<template>
  <div class="h-screen w-screen flex flex-col items-center relative">
    <img
      src="../assets/logos/my-logo-mobile.svg"
      class="pt-5 pb-2 desktop:hidden"
      :class="windowHeight"
    />
    <div
      class="absolute top-0 bottom-auto bg-gradient-to-b from-black via-emerald-950 to-emerald-550 w-full h-28 hidden desktop:block"
    ></div>
    <h1 class="text-center font-bold text-name text-gray-350 pt-4 z-10">
      Lucas García Bertaina
    </h1>
    <h2 class="text-center font-normal text-proffesion text-green-750 z-10">
      FULLSTACK WEB DEVELOPER
    </h2>

    <div class="w-screen bg-emerald-550 relative">
      <picture>
        <source
          media="(min-width:1000px)"
          srcset="../assets/img/image-profile-medium.png"
        />
        <source
          media="(min-width:1300px)"
          srcset="../assets/img/image-profile-large.png"
        />
        <img
          class="mx-auto w-full"
          alt="profile-photo"
          src="../assets/img/image-profile-small.png"
        />
      </picture>
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
  props: {
    windowHeight: { type: String, default: "block" },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
