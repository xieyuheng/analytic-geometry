<script setup lang="ts">
import PlaygroundEditor from './PlaygroundEditor.vue'
import debounce from 'lodash/debounce'
import { Base64 } from 'js-base64'
import PlaygroundPlay from './PlaygroundPlay.vue'
import { ref, watch, onMounted } from 'vue'
import { State } from './State'
import { loadStateReactive } from './loadStateReactive'
import { useRoute, useRouter } from 'vue-router'

const state = ref<State | undefined>(undefined)

const router = useRouter()
const route = useRoute()

onMounted(async () => {
  state.value = await loadStateReactive({
    text: Base64.decode(String(route.params.encoded)),
  })
})

watch(
  () => state.value?.text,
  debounce(async (value) => {
    if (state.value) {
      router.replace({
        path: `/playground/${Base64.encodeURI(value)}`,
      })
    }
  }, 300),
)
</script>

<template>
  <div     class="flex overflow-auto h-screen-dynamic flex-col dark:bg-stone-800 dark:text-white">
  <div
    v-if="state"
    class="flex flex-col md:h-full md:overflow-auto md:flex-row"
  >
    <PlaygroundEditor
      class="md:w-1/2 h-full md:min-h-full min-h-[23rem] md:resize-x"
      :state="state"
    />

    <div
      class="md:border-l grow-1 flex flex-col md:min-h-full min-h-[23rem] overflow-auto h-full border-black dark:border-white md:w-1/2"
    >
      <PlaygroundPlay v-if="state.kind === 'Play'" :state="state" />
    </div>
  </div>    
  </div>

</template>
