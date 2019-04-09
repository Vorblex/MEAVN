<template lang="pug">
  .container
    .row
      .col
        h1 Projects
        h3 The list of projects

        section.panel.panel-success
          .panel-heading Project users
          div(v-for="user in users", :key="user._id")
            span {{user.email}} - 
            span {{user.role}}
          // .panel-heading All projects
          router-link(:to="{name: 'NewProject'}") add new project
          table.table.table-striped
            tr
              th Project name
              th Link to project
            tr( v-for="(project, index) in projects", :key="project._id")
              td(@click="showUsers(project.name)") {{project.name}}
              td {{project.link}}
</template>

<script>
import ProjectsService from '@/services/ProjectsService'

export default {
  data () {
    return {
      projects: [],
      users: []
    }
  },
  methods: {
    async getProjects () {
      const response = await ProjectsService.fetchProjects()
      this.projects = response.data.projects
      console.log(this.projects);
    },
    async showUsers (name) {
      const {data} = await ProjectsService.getUsers(name)
      this.users = data.users
      console.log(this.users);
    }
  },
  mounted() {
    this.getProjects()
  }
}
</script>

<style>

</style>
