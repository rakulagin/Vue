<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="My personal costs"/>
    <div>Total Price = {{getFullPaymentValue}}</div>
    <PaymentFormButton @showHideForm="ShowIt" />
    <AddPaymentForm v-if="showForm"/>
    <PaymentsDisplay :items="currentElements" />
    <MyPagination :cur="cur" :length="getPaymentsList.length" :n="n" @changePage="changePage"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import PaymentsDisplay from "@/components/PaymentsDisplay";
import AddPaymentForm from "@/components/AddPaymentForm";
import PaymentFormButton from "@/components/PaymentFormButton";
import MyPagination from "@/components/MyPagination";
import {mapMutations, mapGetters, mapActions} from 'vuex'

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
      n: 5,
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
      // this.$store.dispatch('fetchData', p)
      this.cur = p
    }
  },

  created () {
    // this.$store.dispatch('fetchData', this.cur)
    this.$store.dispatch('fetchData')
  },
  mounted() {
    if(!this.$route.params?.page || isNaN(this.$route.params.page)) return
    this.cur = Number(this.$route.params.page)
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
