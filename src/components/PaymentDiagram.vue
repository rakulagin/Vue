<template>
<div>
  pay
<!--  <PaymentsDisplay :items="forDiagram"/>-->
  <div v-for="item in forDiagram" :key="item.id"> {{ item.category }} {{ item.value }} </div>
</div>
</template>

<script>
// import PaymentsDisplay from "@/components/PaymentsDisplay";

export default {
  name: "PaymentDiagram",
  // components: {PaymentsDisplay},

  data() {
    return {
      cats: {}
    }
  },

  methods: {

  },


  computed: {
     forDiagram() {
      return this.$store.getters.getPaymentsList
      }



  }
}

</script>

<style scoped>

</style>