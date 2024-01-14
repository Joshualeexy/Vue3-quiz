<script setup>
import {defineProps} from 'vue'
import { useRouter } from 'vue-router';
const props = defineProps(['data'])
const router = useRouter()
const Navigate = (id)=>{
  router.push(`/quiz/${id}`)
}

</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 p-10 gap-10">
      <div class=""  v-for="quiz in data" :key="quiz.id" @click="Navigate(quiz.id)">
           <img :src="quiz.img" alt="">
              <div class="">
                  <h2 class="text-1xl sm:text-2xl font-bold">{{ quiz.name }}</h2>
                  <small>{{ quiz.questions.length }} questions</small>
              </div>
      </div>
    </div>
</template>