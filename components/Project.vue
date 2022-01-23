<template>
  <div class="flex flex-col items-center w-9/12 mx-auto pt-10">
    <h3 class="font-semibold text-xl text-green-750 pr-28 pb-5">
      {{ projectName }}
    </h3>
    <div class="w-10/12 mx-auto pb-5">
      <p class="text-gray-350 text-lg font-normal">{{ projectDescription }}</p>
    </div>
    <a :href="projectGithub" target="_blank"
      ><img :src="projectImage" alt="" class="pb-10"
    /></a>
  </div>
</template>

<script>
export default {
  props: {
    projectName: { type: String },
    projectDescription: { type: String },
    projectImage: { type: String, default: "" },
    projectGithub: { type: String }
  },
};
</script>
