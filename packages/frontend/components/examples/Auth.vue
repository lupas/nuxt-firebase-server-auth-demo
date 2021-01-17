<template>
  <div>
    <h3 class="text-2xl mb-5">SignUp / LogIn</h3>
    <form v-if="!isLoggedIn" onsubmit="return false;">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="formData.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email"
          type="email"
          autocomplete="username"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Password
        </label>
        <input
          v-model="formData.password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Password"
          type="password"
          autocomplete="current-password"
        />
      </div>
      <Btn @click="createUser">Register</Btn>
      <Btn @click="signInUser">Sign In</Btn>
    </form>
    <div v-else>
      <p>You are logged in with {{ authUser.email }}.</p>
      <Btn color="primary" outlined @click="logout">Logout</Btn>
      <Btn color="primary" outlined @click="sendRequest">Send Request</Btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      authUser: (state: any) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  data: () => ({
    formData: {
      email: '',
      password: '',
    },
  }),
  methods: {
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
      } catch (e) {
        alert(e)
      }
    },
    async signInUser() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
      } catch (e) {
        alert(e)
      }
    },
    async logout() {
      try {
        await this.$fire.auth.signOut()
      } catch (e) {
        alert(e)
      }
    },
    async sendRequest() {
      const response = await this.$axios.get('http://localhost:3001/api')
      console.log(response)
    },
  },
})
</script>
