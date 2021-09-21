<template>
  <b-navbar class="base-header" :type="background" :mobile-burger="burguerMenu">
    <template #brand>
      <b-navbar-item v-if="logo" tag="router-link" :to="{ path: '/' }">
        TODO list
      </b-navbar-item>
    </template>
    <template #start></template>
    <template #end>
      <b-navbar-dropdown :label="user.name">
        <b-navbar-item
          v-for="(user, index) in users"
          :key="index"
          @click="setUser(user)"
        >
          {{ user.name }}
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  props: {
    background: {
      type: String,
      default: 'is-white',
    },
    logo: {
      type: Boolean,
      default: true,
    },
    burguerMenu: {
      type: Boolean,
      default: true,
    },
  },
  async fetch() {
    await this.getUsers()
    await this.setUser({ id: 0 })
    await this.getList({ id: 0 })
  },
  computed: {
    ...mapGetters('user', ['list']),
    ...mapState('user', ['users', 'user']),
  },
  methods: {
    ...mapActions('user', {
      getUsers: 'list',
      setUser: 'setUser',
    }),
    ...mapActions('todo', {
      getList: 'list',
    }),
  },
}
</script>
