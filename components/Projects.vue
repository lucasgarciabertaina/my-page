<template>
  <div>
    <Title background="bg-gray-950" title="My Projects" />
    <Project
      :projectImage="require('../assets/img/img-podcast-channel.png')"
      projectDescription="Project focused on the layout of the landing page of a Podcast channel."
      projectName="Podcast Channel:"
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
