<template lang="pug">
  .container
    .row.justify-content-center
      .col-8
        h1
          | Registration
        span {{answer}}
        form(@submit.prevent="addUser")
          .form-group
            input.form-control( type="text" placeholder="Email" v-model.trim="user.email" )
          .form-group
            input.form-control( type="password" placeholder="Password" v-model.trim="user.password" )
          .form-group
            button.btn.btn-block.btn-primary(type="submit")
              | Registration
          section
            button.btn.btn-success.btn-block( type="button" @click="goBack" )
              | go to posts page
</template>

<script>
import UsersService from '@/services/UsersService'
export default {
  data () {
    return {
      answer: '',
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async addUser () {
      if (this.user.email !== '' && this.user.password !== '') {
        try {
          let res = await UsersService.addNewUser({
            email: this.user.email,
            password: this.user.password
          })
            console.log(res)
            this.answer = res.data.message
        } catch({response}) {
          this.answer = response.data.error.message
        }
          // this.$router.push({ name: 'Posts' })
      } else {
        alert('Empty fields!')
      }
    },
    goBack () {
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
