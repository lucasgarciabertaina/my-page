<template>
  <div class="h-screen flex flex-col items-center relative">
    <img src="../assets/logos/my-logo-mobile..svg" alt="logo-mobile" />
    <h1 class="text-center font-bold text-name text-gray-350">
      Lucas García Bertaina
    </h1>
    <h2 class="text-center font-normal text-proffesion text-green-750">
      FULLSTACK WEB DEVELOPER
    </h2>

    <div class="w-screen h-15 absolute bg-emerald-550 bottom-0 inset-x-0">
      <img
        class="my-0 mx-auto w-72"
        src="../assets/img/image-profile.png"
        alt="profile-photo"
      />
      <div
        class="bg-gradient-to-b from-transparent via-emerald-550 to-emerald-950 w-screen h-20 z-10 absolute bottom-0 flex flex-col justify-end items-center"
        @click="activate()"
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
    activate: { type: Function },
  },
  data: () => {
    return {};
  },
};
</script>
