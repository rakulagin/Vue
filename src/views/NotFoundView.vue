<template>
  <div class="about">
    <h1>This is an not found page</h1>
    <button @click="openModalAuthForm">Show/Hide</button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    openModalAuthForm() {
      this.$modal.show('auth', {title: "Auth Form", component: "AuthForm"})
    }
  }
}
</script>