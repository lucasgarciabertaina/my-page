<template>
  <div>
    <Title background="bg-gray-950" title="Experience" />
    <div class="flex gap-7 w-10/12 mx-auto pt-11 pb-11">
      <img src="../assets/logos/tracestory.svg" alt="" />
      <p class="text-gray-350 text-lg font-normal">
        Traceability visualization tool that allows you to see the entire value
        chain.
      </p>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";

export default {
  components: {
    Title,
  },
};
</script>
