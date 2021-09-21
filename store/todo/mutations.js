export default {
  setList(state, todoList) {
    state.todoList = todoList
  },
  addToList(state, item) {
    state.todoList.push(item)
  },
}
