/*
import TodoAPI from '@/api/TodoAPI'

function service(app) {
  return new TodoAPI(app.$axios)
}

export default {
  async create({ commit }, payload) {
    await service(this).create(payload)
  },

  update({ commit }, payload) {
    return service(this).update(payload)
  },

  ....

Esta configuracion seria para el uso con api, pero vamos a usar Local Storage
*/

if (!localStorage.getItem('todo_list')) {
  localStorage.setItem(
    'todo_list',
    JSON.stringify([
      {
        id: 0,
        name: 'Pepe',
        list: [
          { id: 0, done: false, title: 'comprar papel del wc' },
          { id: 1, done: false, title: 'comprar cerveza' },
        ],
      },
      {
        id: 1,
        name: 'Luis',
        list: [
          { id: 0, done: false, title: 'tender la ropa' },
          { id: 1, done: false, title: 'comprar suavizante' },
        ],
      },
    ])
  )
}

export default {
  create({ commit, dispatch }, payload) {
    commit('addToList', payload)
    dispatch('todo/update', {}, { root: true })
  },

  delete({ commit, rootState, dispatch }, payload) {
    const list = [...rootState.todo.todoList]
    list.splice(
      list.findIndex((i) => {
        return i.id === payload.id
      }),
      1
    )
    const fullList = JSON.parse(localStorage.getItem('todo_list'))
    fullList.forEach((item, index) => {
      if (item.id === rootState.user.user.id) fullList[index].list = list
    })
    localStorage.setItem('todo_list', JSON.stringify(fullList))
    dispatch('todo/list', rootState.user.user, { root: true })
    commit('setList', list)
  },

  list({ commit }, payload) {
    const response = JSON.parse(localStorage.getItem('todo_list')).find(
      (item) => item.id === payload.id
    ).list
    commit('setList', response)
    return response
  },

  update({ commit, rootState, dispatch }, payload) {
    const list = rootState.todo.todoList
    const newState = list.map((item) =>
      item?.id === payload?.item?.id ? payload.item : item
    )
    list.forEach((item, index) => {
      if (item?.id === payload?.item?.id) list[index].list = newState
    })
    const fullList = JSON.parse(localStorage.getItem('todo_list'))
    fullList.forEach((item, index) => {
      if (item.id === rootState.user.user.id) fullList[index].list = newState
    })
    localStorage.setItem('todo_list', JSON.stringify(fullList))
    dispatch('todo/list', rootState.user.user, { root: true })
    commit('setList', newState)
    return newState
  },
}
