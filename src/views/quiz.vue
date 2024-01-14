<script setup>
import card from "../components/card.vue"
import { useRoute } from 'vue-router'
import datas from "../data/data.json"
const route = useRoute();
const quizId = route.params.id
console.log(quizId)
const data = datas.filter((data) => parseInt(data.id) ==  parseInt(quizId))


</script>

<template>
    <card :data="data" />.
    <div class="p-10 ">
        <RouterLink to="/" class="p-3 bg-gray-200"> back to quizes</RouterLink>
    </div>
</template>