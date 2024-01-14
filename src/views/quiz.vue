<script setup>
import quizDatas from "../data/data.json"
import question from "../components/question.vue"
import quizHeader from "../components/Quiz-header.vue"
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute();
const quizId = parseInt(route.params.id)
const quizData = ref(quizDatas.find(q =>q.id == quizId))
const currentQuestionIndex = ref(0)





</script>

<template>
    <main class="flex w-ull h-screen justify-center items-center p-10">
        <section class="w-8/12 h-5/6 p-8 ">
            <quizHeader :questions="quizData.questions[currentQuestionIndex]" />
            <question />
        </section>
    </main>
</template>