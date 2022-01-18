<template>
  <div class="bg-emerald-550 m-0 p-0 box-content font-page">
    <Home :activate="showData" />
    <AboutMe />
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import AboutMe from "../components/AboutMe.vue";
export default {
  name: "IndexPage",
  components: {
    Home,
    AboutMe,
  },
  data: () => {
    return {};
  },
  methods: {
    showData() {
      this.$store.commit("setComponent");
    },
  },
};
</script>
