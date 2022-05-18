<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="My personal costs 4"/>
    <div>Total Price = {{getFullPaymentValue}}</div>
    <PaymentFormButton @showHideForm="ShowIt" />
    <AddPaymentForm v-if="showForm"/>
    <PaymentsDisplay :items="currentElements" />
    <MyPagination :cur="cur" :length="12" :n="n" @changePage="changePage"/>
<!--    :length="getPaymentsList.length"-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentFormButton from './components/PaymentFormButton.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import MyPagination from "./components/MyPagination";

export default {
  name: 'App',
  components: {
    MyPagination,
    HelloWorld,
    PaymentsDisplay,
    PaymentFormButton,
    AddPaymentForm
  },


  data() {
    return {
      cur: 1,
      n: 3,
      showForm: false
    }
  },


  computed: {
    ...mapGetters(['getFullPaymentValue', 'getPaymentsList', 'getCategoryList']),
    currentElements() {
      return this.getPaymentsList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
    }
  },


  actions: {
    ...mapActions(['fetchCategoryList'])
  },


  methods: {
    ...mapMutations([
      'setPaymentsListData'
    ]),
    ShowIt() {
      this.showForm = !this.showForm
    },
    changePage(p) {
      this.$store.dispatch('fetchData', p)
      this.cur = p
    }
  },



  created () {
    this.$store.dispatch('fetchData', this.cur)
    // this.$store.dispatch('fetchData')
  },
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
</style>
