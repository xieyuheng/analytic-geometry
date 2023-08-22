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
    <div class="font-ui py-2">
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
          class="disabled:bg-stone-100 dark:disabled:bg-stone-700 hidden"
          :id="entry.value"
          :name="name"
          :value="entry.value"
          @input="$emit('update:modelValue', ($event.target as any).value)"
          v-bind="$attrs"
          :checked="entry.value === modelValue"
        />

        <label
          :for="entry.value"
          class="font-ui flex space-x-2 items-center shrink-0"
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
