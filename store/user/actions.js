export default {
  list({ commit }, payload) {
    const response = JSON.parse(localStorage.getItem('todo_list')).map(
      (item) => ({ id: item.id, name: item.name })
    )
    commit('setUsers', response)
    return response
  },
  setUser({ commit, dispatch }, payload) {
    const user = JSON.parse(localStorage.getItem('todo_list')).find(
      (usr) => usr.id === payload.id
    )
    dispatch('todo/list', payload, { root: true })
    commit('setUser', user)
  },
}
