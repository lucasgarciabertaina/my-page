<template>
  <div>
    <Title background="bg-gray-950" title="My Projects" />
    <Project
      class="mt-8"
      :projectImage="require('../assets/img/img-podcast-channel.png')"
      projectDescription="Project focused on the layout of the landing page of a Podcast channel."
      projectName="Podcast Channel:"
      projectGithub="https://github.com/lucasgarciabertaina/lucasgarciabertaina.github.io"
    />
    <Project
      :projectImage="require('../assets/img/img-gifos.png')"
      projectDescription="Creation of an interactive web application for sharing, creating and downloading animated GIFs."
      projectName="GIFOS:"
      projectGithub="https://github.com/lucasgarciabertaina/project-gifos"
    />
    <Project
      :projectImage="require('../assets/img/img-hamburger-page.png')"
      projectDescription="Challenge in which based on a wiframe you had to design your own mobile and tablet website of a hamburger site."
      projectName="Burger Site:"
      projectGithub="https://github.com/lucasgarciabertaina/project-burger-web"
    />
    <Project
      :projectImage="require('../assets/img/img-batatabit.png')"
      projectDescription="Challenge in which a responsive mobile first website of the company batatabit was simulated."
      projectName="Batata Bit:"
      projectGithub="https://github.com/lucasgarciabertaina/project-mobile-first"
    />
  </div>
</template>

<script>
import Title from "./Title.vue";
import Project from "./Project.vue";

export default {
  components: {
    Title,
    Project,
  },
};
</script>
