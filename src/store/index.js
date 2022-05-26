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
      state.paymentList = payload //старый метод, исправил
      // state.paymentList = [state.paymentList, ...payload]
    },
    addDataToPaymentsList(state, payload) {
      state.paymentList.push(payload)
    },
    setCategories(state, payload){
      state.categoryList = payload
    },
    removeItem(state, payload) {
      const find = state.paymentList.find(item => item.id == payload)
      const myIdx = state.paymentList.indexOf(find)
      state.paymentList.splice(myIdx, 1)
    },
    editDataFromPaymentList(state, payload) {
      const find = state.paymentList.find(item => item.id == payload.id)
      const myIdx = state.paymentList.indexOf(find)
      Vue.set(state.paymentList, myIdx, payload)
    }
  },
  actions: {
    fetchData({commit}) {
      return new Promise((resolve)=>{
        setTimeout(()=>{
          const items = []
          for(let i=1; i<=15; i++) {
            items.push({
              date: "01.05.2022",
              category: "Sport",
              value: Math.floor(Math.random() * 300),
              id: i
              // value: i+1,
              // id: Math.floor(Math.random()* Math.floor(Math.random() * Date.now()) +i)
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
          resolve (['Food', 'Transport', 'Education', 'Entertainment', 'Sport'])
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
