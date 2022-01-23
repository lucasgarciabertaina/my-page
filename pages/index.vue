<template>
  <div class="bg-emerald-550 m-0 p-0 box-content font-page">
    <home :profilePhoto="this.$store.state.imageHome" />
    <about-me />
    <my-stack />
    <projection />
    <experience />
    <projects />
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import AboutMe from "../components/AboutMe.vue";
import MyStack from "../components/MyStack.vue";
import Projection from "../components/Projection.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    AboutMe,
    MyStack,
    Projection,
    Experience,
    Projects,
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
    },
  },
};
</script>
