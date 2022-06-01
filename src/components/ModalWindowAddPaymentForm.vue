<template>
  <div class="wrapper">
    <div class="header">
      {{ settings.title }}
    </div>
    <div class="content">
      <!--      <AddPaymentForm v-if="settings.component === 'addform'"/>-->
      <!--      <AuthForm v-if="settings.component === 'auth'"/>-->
      <component
        :is="settings.component"
        :values="settings.props"
      />
    </div>
    <div class="footer">
      <button @click="onCloseClick">
        Close
      </button>
    </div>
  </div>
</template>

<script>
// import AddPaymentForm from "@/components/AddPaymentForm";
// import AuthForm from "@/components/AuthForm";
export default {
  name: "ModalWindowAddPaymentForm",
  components: {
    AuthForm: () => import('@/components/AuthForm'),
    AddPaymentForm: () => import('@/components/AddPaymentForm')
  },
  props: {
    settings: Object
  },
  // computed: {
  //   componentProps() {
  //     // return this.props?.settings?.props ?? {}
  //     return this.props.settings
  //   }
  // },
  methods: {
    onCloseClick() {
      this.$modal.hide()
    }
  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  position: absolute;
  top: 20%;
  left: 35%;
  background: #efefef;
}
</style>