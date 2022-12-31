
export default {
    state: {
        moneyDeposit: null,
    },

    getters: {
        MONEY_DEPOSIT: state => state.moneyDeposit,
    },

    mutations: {
        MoneyDeposit(state, payload) {
            state.moneyDeposit = payload
        },
    },
    namespaced: true
}
