<template>
  <div class="card todo-wrapper">
    <div class="card-content p-5">
      <b-field label="Añadir tarea:">
        <b-input
          v-model="task"
          placeholder="Escribe aqui tu tarea pendiente"
        ></b-input
      ></b-field>
      <div class="buttons">
        <button class="button is-primary" @click="add()">Añadir</button>
      </div>

      <div v-if="pending.length" class="list">
        <label class="label"
          >Tienes {{ pending.length }} tareas pendientes:</label
        >
        <List :items="pending" @change="markAsDone" @deleteItem="deleteItem" />
      </div>

      <p v-if="!pending.length">No tienes tareas</p>

      <div v-if="completed.length" class="list">
        <label class="label">Tareas completadas:</label>
        <List
          :items="completed"
          @change="revertDone"
          @deleteItem="deleteItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import List from '~/components/list/List.vue'

export default {
  name: 'TodoList',
  components: { List },
  props: {
    allItems: {
      type: [Array],
      default: () => [],
    },
  },
  data: () => ({ task: null }),
  computed: {
    pending() {
      return this.allItems.filter((item) => {
        return !item.done
      })
    },
    completed() {
      return this.allItems.filter((item) => {
        return item.done
      })
    },
  },
  methods: {
    add() {
      const id = this.allItems.length
        ? this.allItems[this.allItems.length - 1].id + 1
        : 0
      if (this.task.length)
        this.$emit('create', { id, title: this.task, done: false })
      this.task = null
    },
    deleteItem(item) {
      this.$emit('delete', item)
    },
    markAsDone(item) {
      const itemDone = { ...item }
      itemDone.done = true
      this.$emit('update', { item: itemDone })
    },
    revertDone(item) {
      const itemDone = { ...item }
      itemDone.done = false
      this.$emit('update', { item: itemDone })
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-wrapper {
  width: 32em;
  max-width: 100%;
  min-height: 30em;
  margin: 1.5em auto 2em;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 2em 1em;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  background-color: white;
  overflow: hidden;
  position: relative;
  /deep/ .label,
  p {
    font-size: 1.3em;
  }
  .todo-list {
    margin-top: 1em;
    li {
      margin: 0.5em 0;
      font-size: 1.3em;
    }
  }
}
.list {
  margin: 2em 0;
}
</style>
