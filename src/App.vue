<template>
  <div id="app">
    <nav>

      <router-link :to="{name: 'Dashboard', params: {page: '1'} }">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/notfound">notfound</router-link>
    </nav>
    <router-view />
    <transition name="fade">
      <ModalWindowAddPaymentForm :settings="settings" v-if="modalShow"/>
    </transition>
    <transition name="fade">
      <MyContextMenu />
    </transition>
    <Calc/>


    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Food'}, query: {value: 200}}">Food 200</router-link> /
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Transport'}, query: {value: 500}}">Transport 500</router-link> /
    <router-link :to="{name: 'AddPaymentForm', params: {section: 'payment', category: 'Entertainment'}, query: {value: 2000}}">Entertainment 2000</router-link>
  </div>
</template>

<script>
// import ModalWindowAddPaymentForm from "@/components/ModalWindowAddPaymentForm";
import MyContextMenu from "@/components/MyContextMenu";
import Calc from "@/components/Calc";
export default {
  data () {
    return {
      modalShow: false,
      settings: {

      }
    }
  },
  methods: {
    onShow(data) {
      this.modalShow = true
      this.settings = data
      // console.log(data)
    },
    onHide() {
      this.settings = {}
      this.modalShow = false
    }
  },
  components: {Calc, MyContextMenu, ModalWindowAddPaymentForm: () => import('@/components/ModalWindowAddPaymentForm')},
  mounted() {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  beforeDestroy() {
    this.$modal.EventBus.$off('show', this.onShow)
    this.$modal.EventBus.$off('hide', this.onHide)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
