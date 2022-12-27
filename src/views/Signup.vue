<template>
    <!-- <router-link to="/login">login</router-link> -->
    <div class="pagehome w-full h-screen flex justify-around items-center">
      <header class="side-left z-10 bg-[#7355e6] h-full w-[40%] flex justify-center shadow-[#000] ">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      </header>
      <main class="bg-[#cfccd1] w-[60%] h-full flex justify-center items-center" v-on:change="submit" v-bind:class="{'w-[100%]':submit ==true, 'absolute':submit ==true}">
        <Formsg @submited="submited" />
      </main>
    </div>
  
  </template>
  <script >
  
  import Formsg from '../components/FormSg.vue'
  export default {
    name:'SignupHome',
    data() {
      return {
        submit : false,
      }
    },
    components: {
      Formsg,
    },
    
    methods: {
      submited(value) {
        this.submit = value;
        console.log(this.submit);
      }
    }
  
  }
  </script>
  
  
<style scoped>
  .side-left{
    -webkit-box-shadow: 6px 7px 21px 5px #919191; 
  box-shadow: 6px 7px 21px 5px #919191;

  
  }
  
  </style>
  