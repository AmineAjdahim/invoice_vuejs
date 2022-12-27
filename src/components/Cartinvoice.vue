<template lang="">
    
    <div class="cart bg-[#292744] mt-6 shadow-sm shadow-[#211f36] w-full h-[150px] rounded-[35px] flex items-center px-10 justify-between">
        <div class="id_invoice">
            <p class="text-[#fff] text-xl font-medium"> #{{invo.cart_id}}</p>  
        </div>
        <div class="date_invoice">
            <p class="text-[#fff] text-xl font-medium"> {{invo.date}}</p>
        </div>
        <div class="name">
            <p class="text-[#fff] text-xl font-medium"> {{invo.full_name}}</p>    
        </div>
        <div class="price">
            <p class="text-[#fff] text-xl font-medium"> {{invo.price}}$</p> 
        </div>
        <div class="status">
            <p v-if="invo.status == 'pending'" class="text-[#f37932] text-xl font-medium bg-[#f3793240] rounded-full flex items-center justify-center py-1 px-6"> <span class="dot h-[10px] w-[10px]  bg-[#f37932] rounded-[50%] flex mx-1 "></span> {{invo.status}}</p>
            <p v-if="invo.status == 'paid'" class="text-[#59e72e] text-xl font-medium bg-[#59e72e45] rounded-full flex items-center justify-center py-1 px-10"> <span class="dot h-[10px] w-[10px]  bg-[#59e72e] rounded-[50%] flex mx-1 "></span> {{invo.status}}</p>
            <p v-if="invo.status == 'Draft'" class="text-[#a3a3a3] text-xl font-medium bg-[#7675755e] rounded-full flex items-center justify-center py-1 px-10"> <span class="dot h-[10px] w-[10px]  bg-[#a3a3a3] rounded-[50%] flex mx-1 "></span> {{invo.status}}</p>
            <!-- <p v-if="invo.status == 'Draft'" class="text-[#424242] text-xl font-medium"> {{invo.status}}</p> -->
        </div>
        <div class="open_invoice">
            <button class="text-[#22b4b4] text-[20px] font-bold"> <span class="px-2 mx-1 bg-[#7355e6] flex justify-center items-center text-[#fff] rounded-full space-x-3"> > </span> </button>
        </div>

    </div>
</template>
<script>
export default {
    name: 'Cartinvoice',
    props: ['invo'],    
    data()  {
        return {
            
        }
        

    },



    
}
</script>
<style lang="">
    
</style>