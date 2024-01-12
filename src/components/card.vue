<script setup>
import {defineProps} from 'vue'
const props = defineProps(['data'])
</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 p-10 gap-10">
      <div class=""  v-for="quiz in data" :key="quiz.id">
          <img :src="quiz.img" alt="">
            <div class="">
                <h2>{{ quiz.name }}</h2>
                <small>{{ quiz.questions.length }} questions</small>
            </div>
      </div>
    </div>
</template>