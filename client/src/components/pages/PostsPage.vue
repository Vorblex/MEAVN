<template lang="pug">
  .container
    .row
      .col
        h1
          | Posts
        h3
          | This file will list all the posts
        div
          router-link( :to="{ name: 'NewPost' }" )
            | add new post

        section.panel.panel-success( v-if="posts.length" )
          .panel-heading
            | list of posts
          router-link(:to="{name: 'NewPost'}")
          table.table.table-striped
            tr
              th Title
              th Description
              th Actions
            tr( v-for="(post, index) in posts", :key="post._id" )
              td {{ post.title }}
              td {{ post.description }}
              td
                router-link(tag="button" :to="{ name: 'EditPost', params: { id: post._id } }" class="btn btn-success btn-sm mr-1")
                  | edit post
                button.btn.btn-danger.btn-sm( type="button", @click="removePost(post._id)" )
                  | delete

        section.panel.panel-danger( v-else )
          p
            | There are no posts ... Lets add one now!
          div
            router-link( :to="{ name: 'NewPost' }" )
              | add new post
</template>

<script>
// import PostsService from '@/services/PostsService'
import { mapGetters, mapActions } from 'vuex'
// import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      // posts: []
    }
  },
  computed: {
    ...mapGetters('posts', {
      posts: 'items'
    })
    // posts () {
    //   return this.$store.state.posts.items
    // }
  },
  methods: {
    // async getPosts () {
    //   const response = await PostsService.fetchPosts()
    //   this.posts = response.data.posts
    //   // console.log(this.posts)
    // },
    ...mapActions('posts', {
      removePost: 'removePost'
    })
    // async remove (id, index) {
    //   // this.posts.splice(index, 1)
    //   await PostsService.removePost(id)
    //   this.getPosts()
    // }
  },
  mounted () {
    // console.log(this)
    // this.getPosts()
    // console.log(this.$store.state.posts)
    // console.log(this.posts.posts)
    // this.$store.dispatch('posts/getPosts')
  }
}
</script>
