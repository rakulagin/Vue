<template>
  <div class="form-wrp" >
    <input v-model="date" />
    <select v-model="category">
      <option v-for="(value, idx) in CategoryList" :key="idx">{{value}}</option>
    </select>
<!--    <input v-model="category" placeholder="category" />-->
    <input v-model.number="value" placeholder="value" />
    <button @click="onClickSave">Save</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: '',
      category: '',
      value: '',
      show: true
    }
  },
  computed: {
    ...mapGetters(['getCategoryList']),
    getCurrentDate() {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth()+1
      const y = today.getFullYear()
      return `${d}-${m}-${y}`
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
  actions: {
    ...mapActions(["fetchCategoryList"])
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value
      }
      this.$store.commit('addDataToPaymentsList', data)
    },
    created() {
      this.$store.dispatch('fetchCategoryList')
    },
    mounted() {
      this.fetchCategoryList()
    }
  }
}
</script>

<style scoped>

</style>