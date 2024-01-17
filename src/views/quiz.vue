<script setup>
import quizDatas from "../data/data.json"
import question from "../components/question.vue"
import QuizHeader from "../components/QuizHeader.vue"
import Result from "../components/Result.vue"
import { ref, computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute();
const quizId = parseInt(route.params.id)
const quizData = ref(quizDatas.find(q => q.id == quizId))
const currentQuestionIndex = ref(0)
const noCorrectAnswer = ref(0)
const questionStatus = computed(() => `${currentQuestionIndex.value}/${quizData.value.questions.length}`)
const showResult = ref(true)

const barPercent = computed(() => currentQuestionIndex.value / quizData.value.questions.length * 100)



function handlessubmitted(event) {
    if (event) {
        noCorrectAnswer.value++
    }
    if (currentQuestionIndex.value  == quizData.value.questions.length- 1) {
        showResult.value = false
    }
 
    currentQuestionIndex.value++
}



</script>

<template>
    <main class="flex w-ull h-screen justify-center items-center p-10">
        <section class="w-8/12 h-5/6 p-8 ">
            <QuizHeader :questionStatus="questionStatus" :barPercent="barPercent" />
            <question v-if="showResult" :questions="quizData.questions[currentQuestionIndex]"
                @selectedOption="handlessubmitted" />

            <Result v-else :noCorrectAnswer="noCorrectAnswer" :noque="quizData.questions.length"/>
        </section>
    </main>
</template>