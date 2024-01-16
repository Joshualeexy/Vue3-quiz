<script setup>
import { ref, defineProps } from "vue"

const props = defineProps(["questionStatus","barPercent"])

</script>
<template>
    <div class="mb-10">
        <form action="">
            <label for="" class="py-4  text-1xl">Question {{ questionStatus }}</label>
            <br>
          <div  class=" w-3/12 border-4 border-yellow-400">
            <div class=" h-10 bg-yellow-300" :style="{width: `${barPercent}%` }"></div>

          </div>
        </form>
    </div>
</template>