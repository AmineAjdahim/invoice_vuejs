<template >
    <div class="all w-full px-10 py-10">
        <div class="title">
            <h1 class="text-[#fff] font-bold text-[55px]">New Invoice</h1>
        </div>
        <div class="formone py-20">
            <h1 class="text-[#685cc4] font-bold text-[18px]">Bill From</h1>
            <div class="inputs mt-6">
                <p class="text-white font-medium">Street Address</p>
                <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
            </div>
            <div class="czc mt-6 flex ">
                <div class="city flex-grow">
                    <p class="text-white font-medium">City</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
                <div class="city ml-5 flex-grow">
                    <p class="text-white font-medium">Zip code</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
                <div class="city ml-5 flex-grow">
                    <p class="text-white font-medium">Country</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
            </div>
        </div>


        <div class="formtwo">
            <h1 class="text-[#685cc4] font-bold text-[18px]">Bill To</h1>
            <div class="inputs mt-6">
                <p class="text-white font-medium">Client's Name</p>
                <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
            </div>
            <div class="inputs mt-6">
                <p class="text-white font-medium">Client's Email</p>
                <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
            </div>
            <div class="inputs mt-6">
                <p class="text-white font-medium">Street Address</p>
                <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
            </div>
            <div class="czc mt-6 flex ">
                <div class="city flex-grow">
                    <p class="text-white font-medium">City</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
                <div class="city ml-5 flex-grow">
                    <p class="text-white font-medium">Zip code</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
                <div class="city ml-5 flex-grow">
                    <p class="text-white font-medium">Country</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
            </div>
        </div>


        <div class="formtree pb-12 py-20">
            <h1 class="text-[#685cc4] font-bold text-[18px]">Bill To</h1>
            <div class="date flex">
                <div class="inputs mt-6   flex-grow ">
                    <p class="text-white font-medium">Invoice Date</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
                <div class="inputs mt-6 ml-5 flex-grow">
                    <p class="text-white font-medium">Payment Due</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
            </div>
            <div class="inputs  mt-6">
                <p  class="text-white font-medium">Payment Terms</p>
                <select class="w-full h-[45px] text-[#fff] font-medium text-[16px] px-3 mt-2 bg-[#333152] text-" name="" id="">
                    <option value="">Net 1 Day</option>
                    <option value="">Net 7 Days</option>
                    <option value="">Net 14 Days</option>
                    <option value="">Net 30 Days</option>
                </select>
            </div>
            <div class="inputs mt-6">
                <p class="text-white font-medium">Product Description</p>
                <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
            </div>
            
        </div>


        <div class="form4 pb-12 ">
            <h1 class="text-[#c3c3c3] font-bold text-[25px]">Item List</h1>
            
            <div class="czc mt-6 flex ">
                <div class="city w-[60%]">
                    <p class="text-white font-medium">Item Name</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
                <div class="city ml-5 w-[10%]">
                    <p class="text-white font-medium">Qty</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
                <div class="city ml-5 w-[20%]">
                    <p class="text-white font-medium">Price</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
                <div class="city ml-5 flex-grow">
                    <p class="text-white font-medium">total</p>
                    <input class="w-full pt-5 mt-3 bg-[#333152]" type="text" name="" id=""/>
                </div>
            </div>
        </div>
        <div class="btn py-10">
            <button class="w-full p-3 text-white rounded-2xl font-bold text-[16px]  bg-[#333152] "><span class="text-[#7355e6] mr-2 text-[23px]">+</span>Add New item</button>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style> 