<template>
  <div class="bg-emerald-550 m-0 p-0 box-content font-page">
    <home />
    <about-me />
    <my-stack />
    <projection />
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import AboutMe from "../components/AboutMe.vue";
import MyStack from "../components/MyStack.vue";
import Projection from "../components/Projection.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    AboutMe,
    MyStack,
    Projection,
  },
  data: () => {
    return {};
  },
  beforeMount() {
    this.setImageHome();
  },
  methods: {
    setImageHome() {
      const height = window.innerHeight;
      this.$store.commit("setImageHome", height);
      console.log(this.$store.state.imageHome);
    },
  },
};
</script>
