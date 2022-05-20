<template>
  <div>
    <!--    инпут 1-->
    <input placeholder="x" v-model.number="x">
    <br>
    <!--    инпут 2-->
    <input placeholder="n" v-model.number="n">
    <br>
    <!--    кнопки операндов-->
    <button v-for="operand in operands" @click="calc(operand)" :key="operand">
      {{ operand }}
    </button>
    <p>{{ result }}</p>
    <div>
      <!--      показать/скрыть экранную клавиатуру-->
      <input type="checkbox" @click="show=!show">
      <span>Отобразиь экранную клавиатуру</span>
      <div v-show="show">
        <button v-for="(btn, index) in buttons" :key="index" @click="mouseInput(btn)">
          {{ btn }}
        </button>
        <button @click="backspase()">backspase</button>
        <br>
        <!--        выбор операнда-->
        <input type="radio" id="x" value="x" v-model="picked">
        <label for="x">x</label>

        <input type="radio" id="n" value="n" v-model="picked">
        <label for="n">n</label>
        <div v-if="picked"> Выбрана переменная {{ picked }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",

  data() {
    return {
      result: 0,
      x: '',
      n: '',
      operands: ['+', '-', '*', '/', '^'],
      buttons: [0,1,2,3,4,5,6,7,8,9],
      show: true,
      picked: ''

    }
  },

  methods: {
    calc(operation) {
      if(!isNaN(this.x) && !isNaN(this.n)) {
        if (operation == '+') {
          this.result = +this.x+ +this.n
        } else if (operation == '-') {
          this.result = this.x-this.n
        } else if (operation == '*') {
          this.result = this.x*this.n
        } else if (operation == '/') {
          if (this.n) { // проверка на ноль
            this.result = Math.ceil(this.x/this.n)
          } else {
            this.result = "Делить на ноль нельзя!"
          }
        } else if (operation == '^') {
          return this.result = Math.pow(this.x,this.n)
        }
      } else {
        this.result="Вы ввели не число";
      }
    },

    mouseInput(btn) {
      if(this.picked == 'x') {
        let str = this.x.toString().concat(btn)
        this.x = Number(str)
      } else if (this.picked == 'n') {
        let str = this.n.toString().concat(btn)
        this.n = Number(str)
      }
    },

    backspase() {
      if(this.picked == 'x') {
        const str = this.x.toString().slice(0, -1)
        this.x = +str
      } else if (this.picked == 'n') {
        const str = this.n.toString().slice(0, -1)
        this.n = +str
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