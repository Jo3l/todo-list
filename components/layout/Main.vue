<template>
  <main class="is-relative">
    <TodoList
      :all-items="todoList"
      @update="update"
      @create="create"
      @delete="deleteItem"
    />
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import TodoList from '~/components/list/TodoList.vue'

export default {
  name: 'MainContent',
  components: { TodoList },
  data: () => ({
    main: {},
  }),
  computed: {
    ...mapGetters('todo', ['list']),
    ...mapState('todo', ['todoList']),
  },
  methods: {
    ...mapActions('todo', {
      update: 'update',
      create: 'create',
      deleteItem: 'delete',
    }),
  },
}
</script>
