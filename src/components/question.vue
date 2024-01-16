<script setup>
import { ref, defineProps, defineEmits } from "vue"
const props = defineProps(["questions", "doAnswer"])
const emit = defineEmits(["selectedOption"])
function doAnswer(selectedAnswer) {
    emit("selectedOption", selectedAnswer)
}



</script>
<template>
    <div class="">
        <label for="" class="py-4 font-medium text-3xl">{{ questions.text }}</label>
    </div>
    <div class="flex flex-col gap-5">
        <div class="flex w-full " v-for="option in questions.options" :key="option.id" @click="doAnswer(option.isCorrect)">
            <span class="w-1/24 bg-yellow-400 p-4 font-medium text-3xl">{{ option.label }}</span>
            <p class="bg-gray-200 w-10/12 p-4 font-medium text-3xl">{{ option.text }}</p>
        </div>
    </div>
</template>