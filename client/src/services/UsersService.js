import api from '@/services/api'

export default {
  fetchPosts () {
    return api().get('posts')
  },
  fetchPost (id) {
    return api().get(`posts/${id}`)
  },
  addNewUser (params) {
    return api().post('users', params)
  },
  signIn (params) {
    return api().post('users/signin', params)
  },
  updatePost (params) {
    return api().put(`posts/${params.id}`, params)
  },
  removePost (id) {
    return api().delete(`posts/${id}`)
  }
}
