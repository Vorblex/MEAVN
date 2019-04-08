import api from '@/services/api'

export default {
  fetchProjects () {
    return api().get('projects')
  },
  fetchProject (id) {
    return api().get(`projects/${id}`)
  },
  addNewProject (params) {
    return api().post('projects', params)
  },
  updateProject (params) {
    return api().put(`projects/${params.id}`, params)
  },
  removeProject (id) {
    return api().delete(`projects/${id}`)
  }
}
