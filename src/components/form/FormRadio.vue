<script setup lang="ts">
defineProps<{
  name: string
  entries: Array<{ value: string; label: string }>
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="flex flex-col">
    <div class="py-2 font-ui">
      <slot name="label" />
    </div>

    <div
      class="flex flex-col items-start space-y-2 border border-black py-2 dark:border-white"
    >
      <div
        v-for="(entry, index) of entries"
        :key="index"
        class="flex max-w-min px-3"
      >
        <input
          type="radio"
          class="hidden disabled:bg-stone-100 dark:disabled:bg-stone-700"
          :id="entry.value"
          :name="name"
          :value="entry.value"
          @input="$emit('update:modelValue', ($event.target as any).value)"
          v-bind="$attrs"
          :checked="entry.value === modelValue"
        />

        <label
          :for="entry.value"
          class="flex shrink-0 items-center space-x-2 font-ui"
        >
          <pre v-if="entry.value === modelValue" class="font-code text-sm">{{
            '[x]'
          }}</pre>
          <pre v-if="entry.value !== modelValue" class="font-code text-sm">{{
            '[ ]'
          }}</pre>
          <span>{{ entry.label }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
