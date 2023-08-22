<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
  errorMessage: string
}>()
</script>

<template>
  <div class="flex flex-col h-full w-full overflow-auto p-3">
    <pre class="text-sm md:text-base text-base" v-html="errorMessage"></pre>
  </div>
</template>
