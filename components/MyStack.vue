<template>
  <div>
    <Title background="bg-green-750" title="My Stack" />
    <div
      class="grid grid-cols-3 grid-rows-2 justify-items-center pt-10 pb-10 gap-6 w-4/5 mx-auto"
    >
      <img src="../assets/logos/javascript.svg" alt="" />
      <img src="../assets/logos/node.svg" alt="" />
      <img src="../assets/logos/vue.svg" alt="" />
      <img src="../assets/logos/mongodb.svg" alt="" />
      <img src="../assets/logos/postgressql.svg" alt="" />
      <img src="../assets/logos/aws.svg" alt="" />
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
