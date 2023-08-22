<script setup lang="ts">
import { ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'
import { stateReload } from './stateReload'

const props = defineProps<{
  state: State
}>()

const lang = useGlobalLang()

const timeUsedToRun = ref<number | undefined>(undefined)

async function run() {
  timeUsedToRun.value = undefined
  const timeBefore = performance.now()
  await stateReload(props.state)
  const timeAdter = performance.now()
  timeUsedToRun.value = timeAdter - timeBefore

  if (props.state.errorMessage) {
    props.state.kind = 'Error'
  } else {
    props.state.kind = 'Play'
  }
}

async function share() {
  try {
    const url = window.location.href
    await navigator.clipboard.writeText(url)
    const message = lang.isZh()
      ? `网址（URL）已复制到剪切板！`
      : `URL copied to clipboard!`
    window.alert(message)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex space-x-4">
    <button
      class="text-xl hover:underline underline-offset-4 decoration-2"
      @click="share()"
    >
      <Lang>
        <template #zh> 分享 </template>
        <template #en> Share </template>
      </Lang>
    </button>

    <button
      class="text-xl hover:underline underline-offset-4 decoration-2"
      @click="run()"
    >
      <Lang class="inline">
        <template #zh> 运行 </template>
        <template #en> Run </template>
      </Lang>

      <span
        v-if="timeUsedToRun"
        class="text-stone-500 dark:text-stone-300 text-base"
        >({{ Math.floor(timeUsedToRun) }} ms)</span
      >
    </button>
  </div>
</template>
