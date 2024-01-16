<script setup>
import { ref, watch } from 'vue'
import datas from '../data/data.json'
import card from '../components/card.vue'
import { RouterLink } from "vue-router"


const searchvalue = ref('')
const data = ref(datas)

watch(searchvalue, function () {
    data.value = datas.filter(data => data.name.toLowerCase().includes(searchvalue.value.toLowerCase()))
})

</script>


<template>
    
    <header class="p-10 flex gap-10 justify-between">
        <h1 class="text-2xl font-bold">Quizes</h1>
        <label for="searchbox">
            <input type="text" v-model="searchvalue" class="px-3 py-2 bg-gray-100 rounded-lg outline-none"
                placeholder="search">
        </label>
         <ul class="flex gap-10">
            <li>  <RouterLink to="/" active-class="p-3 bg-gray-200">Home</RouterLink></li>
            <li><RouterLink to="/doc"  active-class="p-3 bg-gray-200">Doc</RouterLink></li>
        </ul>
    </header>
    <card :data="data" />   
</template>