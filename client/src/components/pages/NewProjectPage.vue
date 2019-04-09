<template lang="pug">
  .container
    .row.justify-content-center
      .col-8
        h1
          | Add New Project
        span {{answer}}
        form(@submit.prevent="addProject")
          .form-group
            input.form-control( type="text" placeholder="Project name" v-model.trim="project.name" )
          .form-group
            input.form-control( type="text" placeholder="Project link" v-model.trim="project.link" )
          .form-group
            button.btn.btn-block.btn-primary(type="submit")
              | add new project
          section
            button.btn.btn-success.btn-block( type="button" @click="goBack" )
              | go to projects page
</template>

<script>
import ProjectsService from '@/services/ProjectsService'
export default {
  data () {
    return {
      answer: '',
      project: {
        name: '',
        link: ''
      }
    }
  },
  methods: {
    async addProject () {
      if (this.project.name !== '' && this.project.link !== '') {
        let res = await ProjectsService.addNewProject({
          name: this.project.name,
          link: this.project.link
        })
        this.answer = res.data.message
        this.$router.push({ name: 'Projects' })
      } else {
        alert('Empty fields!')
      }
    },
    goBack () {
      this.$router.push({ name: 'Projects' })
    }
  }
}
</script>
