export default{
    namespaced:true,
      state(){
          return{
            userName:'',
            userID:'',
            showDashboard:false
              }
      },
      mutations:{
        setShowDashBoard(state,payload){
          state.showDashboard = payload;
        },
        setCustomerName(state,payload){
          state.userName = payload;
        }
      },
      actions:{
        submitForm(context,payload){
            context.commit('setCustomerName',payload.userName);
            context.userID=payload.userID;
            context.commit('setShowDashBoard',payload.showDashboard);
        }
      },
      getters:{
          customerDetails(state){
              return state.userName;
          },
          setShowDashboardFlag(state){
            return state.showDashboard;
          }
      }
  }