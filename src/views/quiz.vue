<script setup>
import quizDatas from "../data/data.json"
import question from "../components/question.vue"
import quizHeader from "../components/Quiz-header.vue"
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute();
const quizId = parseInt(route.params.id)
const quizData = ref(quizDatas.find(q => q.id == quizId))
const currentQuestionIndex = ref(0)
const noCorrectAnswer = ref(0)
const questionStatus = computed(() => `${currentQuestionIndex.value}/${quizData.value.questions.length}`)

const barPercent = computed(() => currentQuestionIndex.value / quizData.value.questions.length * 100)
function handlessubmitted(event) {
    if (event) {
        noCorrectAnswer.value++

    }
    currentQuestionIndex.value++
    console.log(event)
}



</script>

<template>
    <main class="flex w-ull h-screen justify-center items-center p-10">
        <section class="w-8/12 h-5/6 p-8 ">
            <quizHeader :questionStatus="questionStatus" :barPercent="barPercent" />
            <question :questions="quizData.questions[currentQuestionIndex]" @selectedOption="handlessubmitted" />
       
        </section>
    </main>
</template>