<script setup>
import { defineProps } from "vue"
import { RouterLink } from "vue-router";
const props = defineProps(["linkPath", "text"])
</script>
<template>
  <div class="flex justify-center items-center">  <button class="border-0 bg-white px-3 py-2 mt-10">
            <RouterLink :to="linkPath">{{ text }}</RouterLink>
        </button></div>
</template>