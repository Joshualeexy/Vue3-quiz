<script setup>
import { ref, watch } from 'vue'
import datas from './data/data.json'
import card from './components/card.vue'

const searchvalue = ref('')
const data = ref(datas)

watch(searchvalue, function () {
  data.value = datas.filter(data=>data.name.toLowerCase().includes(searchvalue.value.toLowerCase()))
})

</script>


<template>
  <header class="p-10 flex gap-10">
    <h1 class="text-2xl font-bold">Quizes</h1>
    <label for="searchbox">
      <input type="text" v-model="searchvalue" class="px-3 py-2 bg-gray-100 rounded-lg outline-none"
        placeholder="search">
      </label>
  </header>
  <card :data="data" />
</template>




