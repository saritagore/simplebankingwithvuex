
import {createStore} from'vuex';
import Customer from './modules/Customer.js';
import BankingOperations from './modules/BankingOperations.js';
const store = createStore({
    modules:{
        cust:Customer,
        bank:BankingOperations
    }
    })
    export default store;