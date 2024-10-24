<template>
    <div>
        <form  @submit.prevent="submitForm()">
            <div class="form-control">
                <label for="user-name">User Name</label>
                <input id="user-name" name="user-name" type="text" v-model.trim="userName"/>
                <p v-if="invalid" class="error">Please enter valid Username</p>
            </div>
            <div class="form-control">
                <label for="userID">User ID</label>
                <input id="userID" name="userID" type="text" v-model="userID"/>
                <p v-if="invalid" class="error">Please enter valid userID</p>
            </div>
            <div>
                <base-button >Create Customer</base-button>
            </div>
            
        </form>
        
    </div>
</template>
<script>
export default{
    data(){
        return{
            userName:'',
            userID:'',
            showDashboard:false,
            invalid:false
        }
    },
    methods:{
        submitForm(){   
            if(this.userName==='' || this.userID===''){
                this.invalid= true;
                return;
            }else{
                this.showDashboard=true;
                this.$store.dispatch('cust/submitForm',{
                userName:this.userName,
                userID:this.userID,
                showDashboard:true
            });
            this.invalid = false;
            }
            }
        }
}
</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 15rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}


label {
  font-weight: bold;
}

input{
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}
.error{
    color: red;
    font-size: 8px;
}
</style>