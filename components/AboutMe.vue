<template>
  <div name="about-me" class="flex bg-emerald-550">
    <div class="w-1/3 flex-col pb-5 justify-center hidden desktop:flex">
      <div class="pt-6 pb-1">
        <h3 class="inline-block font-light text-subtitle text-green-750">
          Country
        </h3>
        <h4 class="inline-block text-text text-gray-350">Argentina</h4>
      </div>
      <div class="p-1">
        <h3 class="inline-block font-light text-subtitle text-green-750">
          Actually Live
        </h3>
        <h4 class="inline-block text-text">🇦🇷</h4>
      </div>
      <div class="p-1">
        <h3 class="inline-block font-light text-subtitle text-green-750">
          Gender
        </h3>
        <h4 class="inline-block text-text text-gray-350">Male</h4>
      </div>
      <div class="p-1">
        <h3 class="inline-block font-light text-subtitle text-green-750">
          Passion
        </h3>
        <h4 class="inline-block text-text text-gray-350">Sports</h4>
      </div>
      <div class="p-1">
        <h3 class="inline-block font-light text-subtitle text-green-750">
          Study
        </h3>
        <h4 class="inline-block text-text text-gray-350">Self-taught</h4>
      </div>
    </div>

    <div class="w-1/2 flex flex-col items-center pb-5 desktop:w-1/3">
      <h2 class="text-center font-light text-title text-green-750 pb-1">
        About Me
      </h2>
      <img
        src="../assets/img/image-about.png"
        alt="photo-of-me"
        class="desktop:w-72"
      />
    </div>

    <div class="w-1/2 flex flex-col pb-5 justify-center desktop:w-1/3">
      <div class="p-1">
        <h3 class="inline-block font-light text-subtitle text-green-750">
          Native Language
        </h3>
        <h4 class="inline-block text-text text-gray-350">Spanish</h4>
      </div>
      <div class="p-1">
        <h3 class="inline-block font-light text-subtitle text-green-750">
          English
        </h3>
        <h4 class="inline-block text-text text-gray-350">B1</h4>
      </div>
      <div class="p-1">
        <h3 class="inline-block font-light text-subtitle text-green-750">
          Specialty
        </h3>
        <h4 class="inline-block text-text text-gray-350">Backend</h4>
      </div>
      <div class="p-1 hidden desktop:block">
        <h3 class="inline-block font-light text-subtitle text-green-750">
          Mod to Work
        </h3>
        <h4 class="inline-block text-text text-gray-350">Remote</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
