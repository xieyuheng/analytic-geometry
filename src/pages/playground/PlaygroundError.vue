<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
  errorMessage: string
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col overflow-auto p-3">
    <pre class="text-sm md:text-base" v-html="errorMessage"></pre>
  </div>
</template>
