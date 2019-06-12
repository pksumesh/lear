import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fees: [],
    invoiceNumber: null,
    pbcRefNumber: null,
    redirectUrl: null,
    payIdentifier: null,
    totalFees: null
  },
  mutations: {
    addFee(state, fee) {

      state.fees.push(fee);
    },
    invoiceNumber (state, invoiceNumber) {
      state.invoiceNumber = invoiceNumber
    },
    pbcRefNumber (state, pbcRefNumber) {
      state.pbcRefNumber = pbcRefNumber
    },
    redirectUrl (state, redirectUrl) {
      state.redirectUrl = redirectUrl
      console.log(state.redirectUrl)
    },
    payIdentifier(state, payIdentifier){
      state.payIdentifier = payIdentifier
    },
    fees(state, fees){
      console.log(fees)
      state.fees = fees
    },
    totalFees(state, totalFees){
      state.totalFees = totalFees
    }
  },
  actions: {
    addFee({commit}, {fee}) {
      commit('addFee', fee)
    }
  },
  getters: {
    getFees(state) {
        const defaultFee = {
          id: "annualReport",
          name: "Annual Report Filing",
          code: "OTANN",
          value: 30.00
        }
        state.fees.push(defaultFee)

        return state.fees;
    },
    invoiceNumber: (state) => state.invoiceNumber,
    pbcRefNumber: (state) => state.pbcRefNumber,
    redirectUrl: (state) => state.redirectUrl,
    payIdentifier: (state) => state.payIdentifier,
    totalFees: (state) => state.totalFees
  }
})
