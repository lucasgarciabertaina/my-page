<template>
  <div class="w-full h-14" :class="background">
    <h2
      class="text-center text-title text-gray-350 align-bottom pt-5 pb-0 mb-0"
    >
      {{ title }}
    </h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      class="h-10 w-full border-b-2 border-emerald-550"
      :class="background"
      preserveAspectRatio="none"
    >
      <polygon fill="#070F22" points="0,100 100,100 0,0"></polygon>
    </svg>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: {
    background: { type: String },
    title: { type: String },
  },
};
</script>
