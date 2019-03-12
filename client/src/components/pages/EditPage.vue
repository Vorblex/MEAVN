<template lang="pug">
  .container
    .row.justify-content-center
      .col-8
        h1 Edit Post
        span {{answer}}
        form(@submit.prevent="editPost")
          .form-group
            input.form-control( type="text" placeholder="Title" v-model.trim="post.title" )
          .form-group
            input.form-control( type="text" placeholder="Link" v-model.trim="post.action" )
          .form-group
            textarea.form-control( rows="5" placeholder="Description" v-model.trim="post.description" )
          .form-group
            button.btn.btn-block.btn-primary( type="submit" ) edit post
          section
            button.btn.btn-success.btn-block( type="button", @click="goBack" ) go to posts page
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  data () {
    return {
      answer: '',
      post: {
        title: '',
        description: '',
        action: ''
      }
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    async getPost () {
      let response = await PostsService.fetchPost(this.id)
      this.post = response.data
    },

    async editPost () {
      if (this.post.title !== '' && this.post.description !== '') {
        let res = await PostsService.updatePost({
          id: this.$route.params.id,
          title: this.post.title,
          description: this.post.description,
          action: this.post.action
        })
        this.answer = res.data.message
        this.$router.push({ name: 'Posts' })
      } else {
        alert('Empty fields!')
      }
    },
    goBack () {
      this.$router.push({ name: 'Posts' })
    }
  },
  created () {
    this.getPost()
  }
}
</script>
