<template lang="">
    <div v-if="openwindow == true" @click="openwindow =!openwindow" class="absolute top-0 w-full h-screen z-[3] "></div>
    <div v-if="openwindow == true" class="overlay absolute top-0 w-[40%] h-full z-[5] bg-[#44416c] rounded-tr-[40px]">
        <div class="new relative w-full h-screen flex px-14 pt-24">
            <Newinvoice />
        </div>
    </div>
    <div class="flex justify-center my-40 flex-col items-center  " >
        <header class="flex justify-between w-[45%] items-center">
            <div class="hid">
                <h1 class="text-[#fff] text-5xl font-medium">Invoices</h1>
                <p class="text-[#fff] text-xl"> There are {{suminvoice}} total Invoices</p>
            </div>
            <div class="fliter addnewin w-[290px] flex justify-between ">
                <select class=" bg-transparent text-white" name="" id="">
                    <option class=" bg-none " value="">Filter By status</option>
                </select>
                <button @click="openwindow = true" class="text-[#fff] font-medium text-[18px] p-3 flex justify-center rounded-3xl bg-[#7355e6]"><span class="px-2 mx-1 bg-white flex justify-center items-center text-[#22b4b4] rounded-full space-x-3">+</span>New invoice</button>
            </div>

        </header>
        <div class="cart invoice my-20 w-[45%] h-full">
            <div v-for="invo in invoices " class="loo">
                <Cartinvoice :invo="invo"/>
            </div>
        </div> 

    </div>
</template>
<script>
import Cartinvoice from './Cartinvoice.vue';
import invoices from '@/assets/invoces.json';
import Newinvoice from './Newinvoice.vue';
export default {
    name:'Dashboard',
    data()  {
        return {
            suminvoice : 6,
            invoices,
            openwindow : false,
        }
    },
    components : {
        Cartinvoice,
        Newinvoice,
    },
    
}
</script>
<style scoped>
.overlay {
    -webkit-box-shadow: 9px 2px 16px -1px rgba(120, 120, 120, 0.34); 
    box-shadow: 9px 2px 16px -1px rgba(117, 117, 117, 0.34);
    animation: slide 0.5s;
    
}
@keyframes slide {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
        
        
    }
    
</style>