<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { State } from './State'
import { animate } from './animate'
import { createExampleFormulas } from './createExampleFormulas'
import { createExampleMotions } from './createExampleMotions'
import { createState } from './createState'
import { trackMouse } from './mouse/trackMouse'
import { resizeCanvas } from './resizeCanvas'

const state = ref<State | undefined>(undefined)

const containerElement = ref<HTMLDivElement | undefined>(undefined)
const canvasElement = ref<HTMLCanvasElement | undefined>(undefined)

onMounted(() => {
  if (canvasElement.value && containerElement.value) {
    state.value = createState(canvasElement.value)
    resizeCanvas(state.value.canvas, containerElement.value)

    state.value.camera.position = [1, 1]

    createExampleFormulas(state.value)
    createExampleMotions(state.value)
    trackMouse(state.value, containerElement.value)
    animate(state.value)
  }
})
</script>

<template>
  <div class="h-full w-full" ref="containerElement">
    <canvas ref="canvasElement"></canvas>
  </div>
</template>
