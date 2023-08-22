<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <textarea
    spellcheck="false"
    class="w-full overflow-y-auto whitespace-pre p-3 font-code bg-white dark:bg-stone-800 text-sm md:text-base"
    v-model="state.text"
  ></textarea>
</template>
