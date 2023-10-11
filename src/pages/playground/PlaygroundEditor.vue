<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <textarea
    spellcheck="false"
    class="w-full overflow-y-auto whitespace-pre bg-white p-3 font-code text-sm dark:bg-stone-800 md:text-base"
    v-model="state.text"
  ></textarea>
</template>
