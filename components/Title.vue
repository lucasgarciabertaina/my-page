<template>
  <div class="h-17">
    <div class="w-full h-12 relative" :class="background">
      <h2
        class="text-center text-title text-gray-350 align-bottom absolute top-4 left-1.5 right-1.5"
      >
        {{ title }}
      </h2>
    </div>
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
