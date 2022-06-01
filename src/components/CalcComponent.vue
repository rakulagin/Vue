<template>
  <div class="calc">
    <input v-model.number="x" placeholder="x" name="x">
    <br>
    <input v-model.number="n" placeholder="n" name="n">
    <br>
    <!--    кнопки действий-->
    <button v-for="operand in operands" :key="operand" :name="operand" @click="calc(operand)">
      {{ operand }}
    </button>
    <p>{{ result }}</p>
    <div>
      <!--      показать/скрыть экранную клавиатуру-->
      <input type="checkbox" @click="show=!show">
      <span>Отобразиь экранную клавиатуру</span>
      <div v-show="show">
        <button v-for="(btn, index) in buttons" :key="index" :name="btn" @click="mouseInput(btn)">
          {{ btn }}
        </button>
        <button name="bsp" @click="backspase()">backspase</button>
        <br>
        <!--        выбор операнда-->
        <input id="x" v-model="picked" type="radio" value="x">
        <label for="x">x</label>

        <input id="n" v-model="picked" type="radio" value="n">
        <label for="n">n</label>
        <div>
          Выбрана переменная {{ picked }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcComponent",

  data() {
    return {
      result: 0,
      x: '',
      n: '',
      operands: ['+', '-', '*', '/', '^'],
      buttons: [0,1,2,3,4,5,6,7,8,9],
      show: false,
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
      console.log(this.picked)
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

.calc {
  margin-bottom: 30px;
}

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