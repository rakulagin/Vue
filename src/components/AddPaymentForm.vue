<template>
  <div class="form-wrp">
    <input v-model="date">
    <select v-model="category">
      <option
        v-for="(value, idx) in categoryList"
        :key="idx"
      >
        {{ value }}
      </option>
    </select>
    <input
      v-model.number="value"
      placeholder="value"
    >
    <button @click="onClickSave">
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    values: Object
  },
  data() {
    return {
      date: '',
      category: '',
      value: '',
      id: '',
      show: true
    }
  },
  computed: {
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

  created() {
    // заполнение списка категорий
    this.$store.dispatch('fetchCategoryList')
  },

  mounted() {
    //реакция на эдит
    if(this.values?.item) {
      const {category, date, value, id} = this.values.item
      this.value = value
      this.date = date
      this.category = category
      this.id = id
      return
    }

    // быстрые ссылки
    const {section, category} = this.$route.params
    if(!section || !category) return
    this.category = category
    const {value} = this.$route.query
    if(!value) return
    this.value = value
    if(this.value && this.category) {
      this.onClickSave()
          setTimeout(()=>{
            this.$router.push('/dashboard/1')
          }, 1000)
    }
  },
  methods: {
    onClickSave() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
        id: this.id
      }
      if(!this.id) { // проверка добавить или отредактировать по клику на save
        this.$store.commit('addDataToPaymentsList', data)
      } else {
        this.$store.commit('editDataFromPaymentList', data)
      }
    },
  }
}
</script>

<style scoped>

</style>