<script setup lang="ts">
defineProps<{
  name: string
  options: Record<string, string>
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2 font-ui">
      <slot name="label" />
    </label>

    <div class="flex w-full items-center border border-black dark:border-white">
      <select
        class="w-full bg-white px-2 py-3 font-bold disabled:bg-stone-100 dark:bg-stone-900 dark:disabled:bg-stone-700"
        :id="name"
        :name="name"
        v-bind="$attrs"
      >
        <option v-for="(value, key) in options" :key="key" :value="key">
          {{ value }}
        </option>
      </select>

      <slot name="input-end" />
    </div>
  </div>
</template>
