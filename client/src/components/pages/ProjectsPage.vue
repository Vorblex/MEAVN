<template lang="pug">
  .container
    .row
      .col
        h1 Projects
        h3 The list of projects

        section.panel.panel-success
          .panel-heading All projects

          table.table.table-striped
            tr
              th Project name
              th Link to project
            tr( v-for="(project, index) in projects", :key="project._id")
              td {{project.name}}
              td {{project.link}}
</template>

<script>
import ProjectsService from '@/services/ProjectsService'

export default {
  data () {
    return {
      projects: []
    }
  },
  methods: {
    async getProjects () {
      const response = await ProjectsService.fetchProjects()
      this.projects = response.data.projects
      console.log(this.projects);
    }
  },
  mounted() {
    this.getProjects()
  }
}
</script>

<style>

</style>
