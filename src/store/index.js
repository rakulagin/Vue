import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: [],
    // paymentsListIds: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      // const newUniqIdsObs = payload.filter((item) => {
      //   return state.paymentsListIds.indexOf(item.id) < 0
      // })
      // const uniqIds = newUniqIdsObs.map((obj)=> obj.id)
      // state.paymentsListIds.push(...uniqIds)
      // state.paymentList.push(...newUniqIdsObs)
      state.paymentList = payload
    },
    addDataToPaymentsList(state, payload) {
      state.paymentList.push(payload)
    },
    setCategories(state, payload){
      state.categoryList = payload
    }
  },
  actions: {
    // fetchData({commit}, page) {
    //   return new Promise((resolve)=>{
    //     setTimeout(()=>{
    //       const items = localDB[`page${page}`]
    //       resolve(items)
    //     }, 1000)
    //   }).then((res)=> commit('setPaymentsListData', res))
    // },

    fetchData({commit}) {
      return new Promise((resolve)=>{
        setTimeout(()=>{
          const items = []
          for(let i=1; i<=15; i++) {
            items.push({
              date: "01.05.2022",
              category: "Sport",
              value: i,
              id: Math.floor(Math.random()* Math.floor(Math.random() * Date.now()) +i)
            })
          } resolve(items)
        },2000)
      }).then(res=> {
        commit("setPaymentsListData", res)
      })
    },
    fetchCategoryList({commit}) {
      return new Promise((resolve)=> {
        setTimeout(()=>{
          resolve (['Food', 'Transport', 'Education', 'Entertainment'])
        },1000)
      }).then(res => {
        commit("setCategories", res)
      })
    }
  },
  getters : {
    getPaymentsList: state => state.paymentList,
    getFullPaymentValue: state => {
      return state.paymentList.reduce((res,cur) => res+ cur.value, 0)
    },
    getCategoryList: state => state.categoryList
  }
})
