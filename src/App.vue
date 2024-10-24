<template>
      <the-header></the-header>
      <div class="main-wraper">
  <div v-if="!showDashborad">
    <the-customer-data></the-customer-data>
  </div>
  <div v-else>
    <the-banking-dashvoard></the-banking-dashvoard>
  </div>
 </div>
</template>

<script>
import TheBankingDashvoard from './components/TheBankingDashvoard.vue';
import TheCustomerData from './components/TheCustomerData.vue';
import TheHeader from './components/TheHeader.vue';
export default {
  name: 'App',
  components:{
    TheHeader,
    TheCustomerData,
    TheBankingDashvoard
  },
  computed:{
    showDashborad(){
      return this.$store.getters['cust/setShowDashboardFlag'];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  color:#333;
}
.main-wraper{
  border-top: 2px solid #0077b5;
}
</style>
