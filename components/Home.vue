<template>
  <div class="h-screen flex flex-col items-center">
    <img src="../assets/logos/my-logo-mobile..svg" alt="logo-mobile" />
    <h1 class="text-center font-bold text-name text-gray-350">
      Lucas García Bertaina
    </h1>
    <h2 class="text-center font-normal text-proffesion text-green-750">
      FULLSTACK WEB DEVELOPER
    </h2>

    <div class="w-screen h-15 relative">
      <img
        class="my-0 mx-auto"
        src="../assets/img/image-profile.png"
        alt="profile-photo"
      />
      <span
        class="bg-gradient-to-b from-transparent via-emerald-550 to-emerald-950 block w-screen h-20 z-10 absolute bottom-0"
      ></span>
    </div>

    <div class="w-7 h-7 relative">
      <input type="submit" class="w-7 h-7 absolute z-20 opacity-0" />
      <img class="w-7 h-7" src="../assets/logos/arrow.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
