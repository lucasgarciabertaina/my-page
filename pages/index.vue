<template>
  <div class="bg-emerald-550 font-page overflow-hidden">
    <home :windowHeight="windowHeight" />
    <about-me />
    <my-stack />
    <projection />
    <experience />
    <projects />
    <contact />
    <Footer />
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import AboutMe from "../components/AboutMe.vue";
import MyStack from "../components/MyStack.vue";
import Projection from "../components/Projection.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "IndexPage",
  components: {
    Home,
    AboutMe,
    MyStack,
    Projection,
    Experience,
    Projects,
    Contact,
    Footer,
  },
  data: () => {
    return {
      windowHeight: "",
    };
  },
  beforeMount() {
    this.setImageHome();
  },
  methods: {
    setImageHome() {
      const height = window.innerHeight;
      if (height <= 667) {
        this.windowHeight = "hidden";
      }
    },
  },
};
</script>
