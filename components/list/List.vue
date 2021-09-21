<template>
  <ul class="todo-list">
    <li v-for="item in items" :key="item.title">
      <input
        :id="'item_' + item.id"
        class="todo-checkbox"
        type="checkbox"
        :checked="item.done"
        @change="$emit('change', item)"
      />
      <label :for="'item_' + item.id"></label>
      <span class="todo-text">{{ item.title }}</span>
      <span class="delete" @click="$emit('deleteItem', item)"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  components: {},
  props: {
    items: {
      type: [Array],
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-list {
  margin-top: 1em;
  li {
    margin: 0.3em 0;
    font-size: 1.3em;
    .delete {
      background-color: red;
    }
  }
}
</style>
