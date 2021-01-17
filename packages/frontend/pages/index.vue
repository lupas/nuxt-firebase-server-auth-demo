<template>
  <div class="max-w-full">
    <Logo />
    <h1 class="text-5xl text-opacity-75 text-gray-900 font-bold">
      @nuxtjs/firebase
    </h1>
    <h2 class="text-3xl uppercase text-opacity-75 text-gray-900 font-semibold">
      demo
    </h2>
    <p>
      by
      <a href="https://twitter.com/pascalluther" target="_blank"
        >Pascal Luther</a
      >
      / <a href="https://github.com/lupas" target="_blank">@lupas</a>
    </p>
    <div v-for="component in exampleComponents" :key="component.__file">
      <hr class="mt-5 mb-5" />
      <component :is="component"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo/index.vue'
import Auth from '~/components/examples/Auth.vue'

export default Vue.extend({
  components: {
    Logo,
    Auth,
  },
  data: () => ({
    exampleComponents: [Auth],
  }),
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
