<template>
    <div class="wraper">
    <div class="input-wrapper" >
        <input id="depositeAmt" name="depositeAmt" type="number" v-model.trim="depositeAmt" />
        <base-button class="btn1" @click="deposite" :mode="setClassDeposite">Deposite</base-button>
    </div>

    <div class="input-wrapper" >
        <input id="withdrawAmt" name="withdrawAmt" type="number" v-model.trim="withdrawAmt" />
        <base-button class="btn1" @click="withdraw" :mode="setClassWithdraw">Withdraw</base-button>
    </div>
    </div>
    <div class="wraper">
    <div class="input-wrapper-loan" >
        <h4>Loan Section</h4>
        <input id="loanAmt" name="loanAmt" type="number" v-model.trim="loanAmt" placeholder="Loan Ammount"/>
        <input id="loanPurpose" name="loanPurpose" type="text" v-model.trim="loanPurpose" 
        placeholder="Loan Purpose"/>
        <p v-if="invalid" class="error">PLease enter valid loan amt and purpose</p>
        <div class="btn">
            <base-button class="btn" @click="requestLoan" :mode="setClassrequestLoan">Request Loan</base-button>
            <base-button class="btn" @click="payLoan" :mode="setClassPayLoan">Pay Loan</base-button>
        </div>

    </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            depositeAmt:0,
            withdrawAmt:0,
            loanAmt:0,
            loanPurpose:'',
            invalid:false
        }
    },
    methods:{
        deposite(){
            this.$store.dispatch('bank/deposite',{
                balance:this.depositeAmt
            }); 
            this.depositeAmt=0;
        },
        withdraw(){
            this.$store.dispatch('bank/withdraw',{
                balance:this.withdrawAmt
            }); 
            this.withdrawAmt =0;
        },
        requestLoan(){
            if(this.loanAmt === 0 || this.loanPurpose===''){
                this.invalid=true;
                return;
            }else{
            this.$store.dispatch('bank/requestLoan',{
                loanAmt:this.loanAmt,
                loanPurpose:this.loanPurpose
            });
            this.invalid=false;
        } 
        },
        payLoan(){
                this.$store.dispatch('bank/payLoan',{
                loanAmt:this.loanAmt
            }); 
            this.loanAmt=0;
            this.loanPurpose='';
        },
        setClass(val){
            if(val === 0){
                return 'disabled';
            }else{
                return 'enable'
            }
        }
    },
    computed:{
        setClassDeposite(){
           return this.setClass(this.depositeAmt);
        },
        setClassWithdraw(){
            return this.setClass(this.withdrawAmt);
        },
        setClassrequestLoan(){
            if(this.getLoanAmt>0){
                return 'disabled';
            }else{
                return 'enable'
            }
        },
        setClassPayLoan(){
            if(this.getLoanAmt<=0){
                return 'disabled';
            }else{
                return 'enable'
            }
        },
        getLoanAmt(){
        return this.$store.getters['bank/getLoanAmt'];   
    }
    }
}
</script>
<style scoped>
.wraper{
  margin: 0.2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  background-color: #ffffff;
  max-width:29rem
}
input{
    width: 56%;
    padding: 5px;
    margin-right: 5px;
    border-radius: 5px;
}
.error{
    color:red;
    font-size:8px;
}
.input-wrapper-loan input{
    width: 40%;
}
.btn{
    margin: 5px;
    margin-left: 30px;
}
.btn1{
    margin: 2px;
}
.input-wrapper-loan h4{
    margin: 0;
    padding-bottom: 5px;
}
</style>