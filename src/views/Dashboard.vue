<template lang="">
    <div class="backg  w-full h-screen  bg-[#151422]"></div>
    <div class="page absolute h-full top-0 left-0 right-0 bottom-0 flex overflow-y-scroll">
        <div class="flex h-full fixed z-[99]">
            <div class="sidebar h-full ">
                <SidebarVue />
            </div>
        </div>
        <div class="w-[100%] h-screen">   
            <Invoce />  
        </div>

    </div>

</template>
<script>
import SidebarVue from '../components/Sidebar.vue';
import Invoce from '../components/Invoce.vue';
export default {
    name:'Dashboard',
    components : {
        SidebarVue,
        Invoce,
    },
    
}
</script>
<style scoped>
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: aquamarine;
    }
</style>