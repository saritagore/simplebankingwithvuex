<template>
    <div class="wraper">
        <h2>Welcome {{  showCustomerName}}</h2>
        <div>
            <h2>Your Balance: {{ getBalance }}</h2>
            <h2 v-if="getLoanAmt>0">Your have loan of Rs. {{ getLoanAmt }} for the {{ getLoanPurose }} purpose</h2>
        </div>
    </div>
    <div>
        <the-bank-operation-comp></the-bank-operation-comp>
    </div>
</template>
<script>
import TheBankOperationComp from './TheBankOperationComp.vue';

export default{
    components:{
        TheBankOperationComp
    },
    data(){
        return{

        }
    },
computed:{
    showCustomerName(){
      return this.$store.getters['cust/customerDetails'];
    },
    getBalance(){
        return this.$store.getters['bank/getBalance'];   
    },
    getLoanAmt(){
        return this.$store.getters['bank/getLoanAmt'];   
    },
    getLoanPurose(){
        return this.$store.getters['bank/getLoanPurose'];   
    }
}
}
</script>
<style scoped>
.wraper{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
</style>