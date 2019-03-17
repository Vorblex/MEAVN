import PostsService from '@/services/PostsService'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    items (state) {
      return state.items
    }
  },
  mutations: {
    getPosts (state, payload) {
      state.items = payload
    },
    removePost (state) {
      this.dispatch('posts/getPosts')
    },
    updatePost (state, payload) {
      this.dispatch('posts/getPosts')
    }
  },
  actions: {
    async getPosts ({commit}) {
      const response = await PostsService.fetchPosts()
      commit('getPosts', response.data.posts)
    },
    async removePost (store, payload) {
      await PostsService.removePost(payload)
      store.commit('removePost', payload)
    },
    async updatePost ({commit}, payload) {
      let response = await PostsService.updatePost(payload)
      commit('updatePost')
      router.push({name: 'Posts'})
      return response
    }
  }
}
