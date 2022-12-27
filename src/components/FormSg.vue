<template >
    
        <div v-if="submit == true" class="overlay border-none w-full h-screen absolute top-0 z-50 right-0 bottom-0 left-0 flex justify-center items-center bg-[#fff]">
                <img class="w-[550px] h-[550px]" src="@/assets/loading.svg"  alt="">
        </div>

    <div class="form_d bg-[#fff] w-[54%] shadow-[20px] rounded-xl ">
        <div class="with justify-center mx-14 my-10">
            <div class="logo w-full flex justify-center mb-3">
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            </div>
            <form @submit.prevent="logn" class="sadasd" >
                <div class="input">
                    <h1 class="text-[20px] font-medium">Full Name <span class="text-[#ff2b2b]">*</span></h1>
                    <input type="text" v-on:change="form.name.color = 'black'" v-bind:class="{' border-[#db2929]':form.name.color=='red'}"  v-model.trim="form.name.value" class="border-black border rounded-[3px] font-medium text-[19px] w-full p-2.5 mt-1">
                    <p v-if="form.name.error" v-on:change="form.name.error[0] == '' " class="text-[#db2929]">{{ form.name.error[0] }}</p>
                </div>
                <div class="input pt-5">
                    <h1 class="text-[20px] font-medium">Username <span class="text-[#ff2b2b]">*</span></h1>
                    <input type="text" v-on:change="form.username.color = 'black'" v-bind:class="{' border-[#db2929]':form.username.color=='red'}" v-model="form.username.value" class="border-black border rounded-[3px] font-medium w-full text-[19px]  p-2.5 mt-1">
                    <p v-if="form.username.error" v-on:change="form.username.error[0] == '' " class="text-[#db2929]">{{ form.username.error[0] }}</p>
                </div>
                <div class="input pt-5">
                    <h1 class="text-[20px] font-medium">Email <span class="text-[#ff2b2b]">*</span></h1>
                    <input type="text" v-on:change="form.email.color = 'black'" v-bind:class="{' border-[#db2929]':form.email.color=='red'}" v-model.trim="form.email.value" class="border-black border rounded-[3px] font-medium w-full text-[19px]  p-2.5 mt-1">
                    <p v-if="form.email.error" v-on:change="form.email.error[0] == '' " class="text-[#db2929]">{{ form.email.error[0] }}</p>
                </div>
                <div class="input pt-5">
                    <h1 class="text-[20px] font-medium">Country <span class="text-[#ff2b2b]">*</span></h1>
                    <select class="border-black border rounded-[3px] w-full p-3 mt-1 text-[19px] " v-model.trim="form.country.value">
                        <option class="relative top-2  text-start  bottom-3">Select Country</option>
                        <option v-for="country in All_conuntries"  class="relative top-2 border text-start  bottom-3">{{ country.name }}</option>
                    </select>
                    <p v-if="form.country.error" v-on:change="form.country.error[0] == '' " class="text-[#db2929]">{{ form.country.error[0] }}</p>

                </div>
                <div class="input pt-5">
                    <h1 class="text-[20px] font-medium">Password <span class="text-[#ff2b2b]">*</span></h1>
                    <input type="password"  v-on:change="form.password.color = 'black'" v-bind:class="{' border-[#db2929]':form.password.color=='red'}" v-model.trim="form.password.value" class="border-black border rounded-[3px font-medium] w-full text-[19px]  p-2.5 mt-1">
                    <p v-if="form.password.error" v-on:change="form.password.error[0] == '' " class="text-[#db2929]">{{ form.password.error[0] }}</p>
                </div>
                <div class="input pt-5 flex justify-center">
                    <button type="submit" class=" bg-[#7355e6] px-14 py-2 text-[20px] font-medium rounded-lg text-[#fff]">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import All_conuntries from '../all_counties.json'
export default {
    name: "FormSg",
    data() {
        return {
            All_conuntries: All_conuntries,
            form : {
                name: { value : '', error:[], color : 'black'},
                username: { value : '', error:'', color : 'black'},
                email: { value : '', error:'', color : 'black'},
                country: { value : '' ,error:'', color : 'black'},
                password: { value : '' ,error:'', color : 'black'},

            },
            submit: false,
        }
    },
    mounted() {
        this.form.country.value = All_conuntries[0].name;
    },
    methods: {
        //settimeout with promise
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async time() {
            await this.sleep(3000);
            this.$emit('submited', true);
            this.submit = false;
            this.$router.push('/dashboard')
        },

        logn() {
            if(this.form.name)
                {
                    var hasNumber = /\d/;   
                    this.form.name.error = [];
                    if(this.form.name.value == '')
                    {
                        this.form.name.color = 'red';
                        this.form.name.error.push('Name is required');
                    }
                    else if(this.form.name.value.length < 10)
                    {
                        this.form.name.color = 'red';
                        this.form.name.error.push('Name must be at least 10 characters');
                    }
                    else if( hasNumber.test(this.form.name.value))
                    {
                        this.form.name.color = 'red';
                        this.form.name.error.push('Name must be only letters');
                    }
                }
            if(this.form.email)
                {
                    this.form.email.error = [];
                    if(this.form.email.value == '')
                    {
                        this.form.email.color = 'red';
                        this.form.email.error.push('Email is required');
                    }
                    else if(!this.form.email.value.includes('@'))
                    {
                        this.form.email.color = 'red';
                        this.form.email.error.push('Email must be valid');
                    }

                }
            if(this.form.country)
                {
                    this.form.country.error = [];
                    if(this.form.country.value == 'Select Country')
                        this.form.country.color = 'red';
                }
            if(this.form.password)
                {
                    this.form.password.error = [];
                    if(this.form.password.value == '')
                    {
                        this.form.password.color = 'red';
                        this.form.password.error.push('Password is required');
                    }
                    else if(this.form.password.value.length < 8)
                    {
                        this.form.password.color = 'red';
                        this.form.password.error.push('Password must be at least 8 characters');
                    }
                }
            if(this.form.username)
                {
                    var reWhiteSpace = new RegExp("/^\s+$/");
                    this.form.username.error = [];
                    if(this.form.username.value == '')
                    {
                        this.form.username.color = 'red';
                        this.form.username.error.push('Username is required');
                    }
                    else if(this.form.username.value.length < 8 || this.form.username.value.length > 14)
                    {
                        this.form.username.color = 'red';
                        this.form.username.error.push('Username must be between 8 and 14 characters');
                    }
                    else if(reWhiteSpace.test(this.form.username.value))
                    {
                        this.form.username.color = 'red';
                        this.form.username.error.push('Username must not contain white spaces');
                    }
                }
                
            if(this.form.name.error.length == 0 && this.form.username.error.length == 0 && this.form.email.error.length == 0 && this.form.password.error.length == 0)
                {
                    this.submit = true;
                    console.log("no");
                    this.time();
                    console.log("yes");
                    this.$emit('submited', true);
                }
        }
    }
    
}
</script>
<style scoped>
    .form_d{
        -webkit-box-shadow: 2px 2px 24px 2px #919191; 
      box-shadow: 2px 2px 24px 2px #919191;
    }
    
</style>