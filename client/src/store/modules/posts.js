import PostsService from '@/services/PostsService'
export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    items (state) {
      console.log(state.items)
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
      // store.commit('getPosts')
    },
    updatePost ({commit}, payload) {

    }
  }
}
