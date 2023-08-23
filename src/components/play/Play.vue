<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { State } from './State'
import { animate } from './animate'
import { createState } from './createState'
import { trackMouse } from './mouse/trackMouse'
import { resizeCanvas } from './resizeCanvas'
import { stateRefresh } from './stateRefresh'
import { Mod } from './mod/Mod'
import { listenKeyboard } from './listenKeyboard'

const props = defineProps<{
  mod: Mod
  tick: number
}>()

const state = ref<State | undefined>(undefined)

const containerElement = ref<HTMLDivElement | undefined>(undefined)
const canvasElement = ref<HTMLCanvasElement | undefined>(undefined)

onMounted(() => {
  if (canvasElement.value && containerElement.value) {
    state.value = createState({
      canvas: canvasElement.value,
      container: containerElement.value,
    })
    resizeCanvas(state.value)
    trackMouse(state.value)
    listenKeyboard(state.value)
    stateRefresh(state.value, props.mod)
    animate(state.value)
  }
})

watch(
  () => props.tick,
  () => {
    if (state.value) {
      stateRefresh(state.value, props.mod)
    }
  },
)
</script>

<template>
  <div class="h-full w-full" ref="containerElement">
    <canvas
      @click="canvasElement?.focus()"
      tabindex="1"
      ref="canvasElement"
    ></canvas>
  </div>
</template>
