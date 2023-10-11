<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button
    :disabled="disabled"
    class="border border-black px-3 py-3 font-ui font-bold disabled:bg-stone-100 dark:border-white dark:disabled:bg-stone-700"
    :class="[!disabled && `hover:bg-stone-200 dark:hover:bg-stone-600`]"
    type="submit"
  >
    <slot />
  </button>
</template>
