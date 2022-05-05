<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="My personal costs 4"/>
    <div>Total Price = {{getFullPaymentValue}}</div>
    <PaymentFormButton @showHideForm="ShowIt" />
    <AddPaymentForm v-if="showForm"/>
    <PaymentsDisplay :items="getPaymentsList" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentFormButton from './components/PaymentFormButton.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PaymentsDisplay,
    PaymentFormButton,
    AddPaymentForm
  },
  data() {
    return {
      showForm: true
    }
  },
  computed: {
    ...mapGetters(['getFullPaymentValue', 'getPaymentsList', 'getCategoryList']),
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
    // fetchData() {
    //   return [
    //     {
    //       date: "28-03-2020",
    //       category: "Food",
    //       value: 169
    //     },
    //     {
    //       date: "24-03-2020",
    //       category: "Transport",
    //       value: 300
    //     },        {
    //       date: "24-03-2020",
    //       category: "Food",
    //       value: 532
    //     }
    //   ]
    // }
  },
  created () {
    this.$store.dispatch('fetchData')
    // this.$store.commit('setPaymentsListData', this.fetchData())
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.fetchCategoryList()
    }

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
</style>
