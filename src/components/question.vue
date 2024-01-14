<script setup>
import { ref, defineProps } from "vue"
const props = defineProps(["questions"])
</script>
<template>
    <p>{{questions}}</p>
    <div class="">
        <label for="" class="py-4 font-medium text-3xl">What is the chemical value of sodium</label>
    </div>
    <div class="flex flex-col gap-5">
        <div class="flex w-full ">
            <span class="w-1/24 bg-yellow-400 p-4 font-medium text-3xl">A</span>
            <p class="bg-gray-200 w-10/12 p-4 font-medium text-3xl">16</p>
        </div>
    </div>
</template>