<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input placeholder="x" v-model.number="x" >
    <br>
    <input placeholder="n" v-model.number="n">
    <br>
    <button @click="calc('sum')">x + n</button>
    <button @click="calc('sub')">x - n</button>
    <button @click="calc('multiply')">x * n</button>
    <button @click="calc('div')">x / n</button>
    <button @click="calc('exp')">x^n</button>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      result: 0,
      x: '',
      n: ''
    }
  },
  methods: {
    // я не очень понял дз, может быть надо было сделать через Вью все операции на кнопках, но я решил так
    // если неправильно - легко переделаю
    // по моим меркам это самый короткий код, конструкция switch аналогична по длине, но мне она просто не нравится :)
    // если не проверять на некорректные значения
    calc(operation) {
      if(!isNaN(this.x) && !isNaN(this.n)) { // проверка на некорректные значения
        if (operation == 'sum') {
          this.result = this.x+this.n
        } else if (operation == 'sub') {
          this.result = this.x-this.n
        } else if (operation == 'multiply') {
          this.result = this.x*this.n
        } else if (operation == 'div') {
          if (this.n) { // проверка на ноль
            this.result = Math.ceil(this.x/this.n)
          } else {
            this.result = "Делить на ноль нельзя!"
          }
        } else if (operation == 'exp') {
          return this.result = Math.pow(this.x,this.n)
        }
      } else {
        this.result="Вы ввели не число";
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>