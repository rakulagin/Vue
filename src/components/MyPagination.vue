<template>


  <div :class="[$style.wrp]">
    <div @click="onClick(cur - 1)"> -</div>
    <div v-for="i in amount" :key="i" :class="{[$style.active]: cur === i}" @click="onClick(i)">{{ i }}</div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  // data() {
  //   return {
  //     page: this.cur,
  //     length: this.n
  //   }
  // },
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    onClick(p) {
      if(p<1 || p> this.amount) {
        return
      }
      this.$emit('changePage', p)
    }
  }
}
</script>

<style module>
.wrp {
  display: flex;
  justify-content: center;
}
.active {
      background: #ccc;
}
.wrp > div {
  padding: 10px;
}
.wrp > div:hover{
  outline: 1px solid;
  cursor: pointer;
}
</style>