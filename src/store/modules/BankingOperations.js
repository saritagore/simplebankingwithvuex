export default{
    namespaced:true,
      state(){
          return{
            balance:0,
            loanAmmount:0,
            loanPurpose:''
              }
      },
      mutations:{
        setbalance(state,payload){
          state.showDashboard = payload;
        },
        setLoanAmmount(state,payload){
            state.loanAmmount = payload;
            state.balance = state.balance + payload;
        },
        setLoanPurpose(state,payload){
            state.loanPurpose = payload;
        },
        setDepositeMoney(state,payload){
            state.balance = state.balance + payload;
        },
        setWithdrawAmt(state,payload){
            state.balance = state.balance - payload;
        },
        setLoan(state,payload){
            state.loanAmmount = state.loanAmmount - payload;
            state.balance = state.balance - payload;
        }
      },
      actions:{
        deposite(context,payload){
            context.commit('setDepositeMoney',payload.balance);
        },
        withdraw(context,payload){
            context.commit('setWithdrawAmt',payload.balance);
        },
        requestLoan(context,payload){
            context.commit('setLoanAmmount',payload.loanAmt);
            context.commit('setLoanPurpose',payload.loanPurpose);
        },
        payLoan(context,payload){
            context.commit('setLoan',payload.loanAmt);
        }

      },
      getters:{
          getBalance(state){
              return state.balance;
          },
          getLoanAmt(state){
            return state.loanAmmount;
          },
          getLoanPurose(state){
            return state.loanPurpose;
          }
      }
  }