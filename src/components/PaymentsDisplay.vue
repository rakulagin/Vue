<template>
 <div class="paymentList">
   <div class="paymentItem" v-for="(item, index) in items" :key="index">
     {{ item.id}} {{ item.date }} {{ item.category }} {{ item.value }}
   </div>
 </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () =>[]
    }
  }
}
</script>

<style scoped>

</style>