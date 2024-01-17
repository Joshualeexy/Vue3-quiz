<script setup>
import Button from "./Button.vue"
import { ref, defineProps } from "vue"
const props = defineProps(["noCorrectAnswer","noque"])

const linkPath = "/"
const text = "Go back"
</script>
<template>
    <div class="w-11/12 p-20 text-gray-700 font-medium bg-gray-200 rounded-xl">
        <p class="mb-10 text-2xl text-center">
            Your Results....
        </p>
        <h1 class="text-8xl text-center">
            {{ `${noCorrectAnswer}/${noque}` }}
        </h1>
        <Button :text="text" :linkPath="linkPath"/>
    </div>
</template>