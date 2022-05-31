<template>
  <div>
    <v-btn @click="showDiagram()">1221</v-btn>
    <Pie
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        // labels: [],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#9ACD32'],
            data: [40, 20, 80, 10, 5]
            // data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },

  computed:{
    uniqCategory () {
      return this.$store.getters.getUniqCategory
    },

  },

  watch: {
    uniqCategory: function() {
      this.chartData.labels = this.$store.getters.getUniqCategory
    }
  },


  // let res = Object.fromEntries(set.map(item => [item.category, 0]));
  // set.forEach(item => {res[item.category] += item.value})
// вешайте вотчер на геттер оборачивайте его в компудет и вперед



  methods: {
    showDiagram() {

      console.log(this.$store.getters.getCategoryList)

      // const piePaymentsList = this.$store.getters.getPaymentsList
      // const paymentsForCategory = new Set(piePaymentsList.map((cat) => cat.category));
      // paymentsForCategory.forEach((category => {
      //   this.chartData.labels.push(category)
      // }))
      //
      // const sortPaymentsList = []
      // paymentsForCategory.forEach((cat) => {
      //   sortPaymentsList.push(piePaymentsList.filter((el) => el.category === cat));
      // });
      // sortPaymentsList.forEach((item)=>{
      //   const valueOfCategory = Number(item.reduce((res,cur) => res+ cur.value, 0))
      //   console.log(valueOfCategory)
      //   this.chartData.datasets[0].data.push(valueOfCategory)
      // })
    }
  },










}
</script>
