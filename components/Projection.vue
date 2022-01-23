<template>
  <div>
    <Title background="bg-green-750" title="Projection to this year" />
    <div class="relative w-screen h-72">
      <img
        src="../assets/logos/angular.svg"
        alt=""
        class="absolute top-10 left-1/2 transform -translate-x-1/2"
      />
      <img
        src="../assets/logos/firebase.svg"
        alt=""
        class="absolute top-16 left-16"
      />
      <img
        src="../assets/logos/react.svg"
        alt=""
        class="absolute top-16 right-16"
      />
      <img
        src="../assets/logos/nextjs.svg"
        alt=""
        class="absolute top-44 left-8"
      />
      <img
        src="../assets/logos/graphql.svg"
        alt=""
        class="absolute top-40 right-8"
      />
      <img
        src="../assets/logos/learn.svg"
        alt=""
        class="absolute top-40 left-1/2 transform -translate-x-1/2"
      />
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
