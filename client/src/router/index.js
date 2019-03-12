import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/pages/PostsPage'
import NewPost from '@/components/pages/NewPostPage'
import EditPage from '@/components/pages/EditPage'

import store from '@/store'

// import Vuex from 'vuex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      beforeEnter (to, from, next) {
        store.dispatch('posts/getPosts')
        next()
      }
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/edit',
      name: 'EditPost',
      component: EditPage
    }

  ]
})
