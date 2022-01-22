<template>
  <div class="bg-emerald-550 m-0 p-0 box-content font-page">
    <home :activate="showData" />
    <about-me />
    <my-stack />
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import AboutMe from "../components/AboutMe.vue";
import MyStack from "../components/MyStack.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    AboutMe,
    MyStack,
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
