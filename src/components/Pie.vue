<template>
  <div>
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
      newData: {},
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#9ACD32'],
            data: []
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
    paymentsList () {
      return this.$store.getters.getPaymentsList
    }

  },

  watch: {

    paymentsList: function() {
      // получаем наш список всех покупок
      const allPaymentsList = this.$store.getters.getPaymentsList

      // получаем список уникальных категорий
      const uniqCategories = Object.fromEntries(allPaymentsList.map(item => [item.category, 0]))

      // заполняем сумму затрат по категориям
      allPaymentsList.forEach((item => {uniqCategories[item.category] += item.value}))

      // обнуляем то что было в диаграмме (если не обнулить, то все задублится)
      this.chartData.labels = []
      this.chartData.datasets[0].data = []

      // наполняем диаграмму данными
      for(let category in uniqCategories) {
        this.chartData.labels.push(category)
        this.chartData.datasets[0].data.push(uniqCategories[category])
      }

    }
  },
}
</script>
