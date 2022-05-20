<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="My personal costs 7"/>
    <div>Total Price = {{getFullPaymentValue}}</div>
<!--    <PaymentFormButton @showHideForm="ShowIt" />-->
<!--    <AddPaymentForm v-if="showForm"/>-->
<!--    <ModalWindowAddPaymentForm @close="addShowForm = false" v-if="addShowForm"/>-->
    <button @click="openModalForm">Show/Hide</button>
    <PaymentsDisplay :items="currentElements" />
    <MyPagination :cur="cur" :length="getPaymentsList.length" :n="n" @changePage="changePage"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import PaymentsDisplay from "@/components/PaymentsDisplay";
// import AddPaymentForm from "@/components/AddPaymentForm";
// import PaymentFormButton from "@/components/PaymentFormButton";
import MyPagination from "@/components/MyPagination";
import {mapMutations, mapGetters, mapActions} from 'vuex'
// import ModalWindowAddPaymentForm from "@/components/ModalWindowAddPaymentForm";

export default {
  name: 'App',
  components: {
    // ModalWindowAddPaymentForm,
    MyPagination,
    HelloWorld,
    PaymentsDisplay,
    // PaymentFormButton,
    // AddPaymentForm
  },


  data() {
    return {
      cur: 1,
      n: 5,
      showForm: false,
      addShowForm: false
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
    // ShowIt() {
    //   this.showForm = !this.showForm
    // },
    changePage(p) {
      // this.$store.dispatch('fetchData', p)
      this.cur = p
    },
    openModalForm() {
      this.$modal.show('addform', {title: "Add New Payment", component: "AddPaymentForm"})
    },
  },

  created () {
    // новый вариант, теперь стор не грузится автоматически, но и новые данные добавленные через ссылку не удаляются
    // if(!this.$store.state) {
    //   this.$store.dispatch('fetchData')
    // }
    // старый вариант
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
