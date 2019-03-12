import api from '@/services/api'

export default {
  fetchPosts () {
    return api().get('posts')
  },
  fetchPost (id) {
    return api().get(`posts/${id}`)
  },
  addNewPost (params) {
    return api().post('posts', params)
  },
  updatePost (params) {
    return api().put(`posts/${params.id}`, params)
  },
  removePost (id) {
    return api().delete(`posts/${id}`)
  }
}
