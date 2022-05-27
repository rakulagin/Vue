<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 pb-3">My personal costs</div>
        <v-dialog v-model="dialog" width="500">

          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on">
              ADD NEW COST<v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>

          <v-card>
            <AddPaymentForm />
          </v-card>
        </v-dialog>
        <PaymentsDisplay :items="currentElements"/>
        <MyPagination :cur="cur" :length="getPaymentsList.length" :n="n" @changePage="changePage"/>
      </v-col>

<!--        правый столбец-->

      <v-col>
        <PaymentDiagram />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay";
import AddPaymentForm from "@/components/AddPaymentForm";
import MyPagination from "@/components/MyPagination";
import PaymentDiagram from "@/components/PaymentDiagram";
import {mapGetters} from 'vuex'

export default {
  name: "DashboardView",
  components: {
    PaymentDiagram,
    AddPaymentForm,
    PaymentsDisplay,
    MyPagination

  },
  data() {
    return {
      dialog: false,
      cur: 1,
      n: 5,
    }
  },

  computed: {
    ...mapGetters(['getPaymentsList']),
    currentElements() {
      return this.$store.getters.getPaymentsList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
    }
  },

  methods: {
    changePage(p) {
      this.cur = p
    },
  },

  async mounted() {
    await this.$store.dispatch("fetchData")
  }
}
</script>