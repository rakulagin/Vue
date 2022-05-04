<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="My personal costs"/>
    <PaymentFormButton @showHideForm="ShowIt" />
    <AddPaymentForm @addNewPayment="addPaymentData" v-if="showForm"/>
    <PaymentsDisplay :items="paymentsList" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentFormButton from './components/PaymentFormButton.vue'

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
      paymentsList: [],
      showForm: false
    }
  },
  methods: {
    addPaymentData (data) {
      this.paymentsList.push(data)
    },
    ShowIt() {
      this.showForm = !this.showForm
    },
    fetchData() {
      return [
        {
          date: "28-03-2020",
          category: "Food",
          value: 169
        },
        {
          date: "24-03-2020",
          category: "Transport",
          value: 300
        },        {
          date: "24-03-2020",
          category: "Food",
          value: 532
        }
      ]
    }
  },
  created () {
    this.paymentsList = this.fetchData()
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
