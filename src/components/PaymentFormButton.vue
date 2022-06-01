<template>
  <div>
    <button @click="showForm">
      Add new cost
    </button>
  </div>
</template>

<script>
export default {
  name: "PaymentFormButton",
  methods: {
    showForm() {
      this.$emit('showHideForm')
    }
  }
}
</script>

<style scoped>

</style>