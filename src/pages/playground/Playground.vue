<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { main } from './main'

const containerElement = ref<HTMLDivElement | undefined>(undefined)
const canvasElement = ref<HTMLCanvasElement | undefined>(undefined)

onMounted(() => {
  if (canvasElement.value) {
    main(canvasElement.value)
  }
})
</script>

<template>
  <div ref="containerElement">
    <canvas ref="canvasElement"></canvas>
  </div>
</template>
