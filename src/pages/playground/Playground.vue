<script setup lang="ts">
import PlaygroundEditor from './PlaygroundEditor.vue'
import PlaygroundError from './PlaygroundError.vue'
import debounce from 'lodash/debounce'
import { Base64 } from 'js-base64'
import PlaygroundPlay from './PlaygroundPlay.vue'
import PlaygroundToolbar from './PlaygroundToolbar.vue'
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
  <div
    class="h-screen-dynamic flex flex-col overflow-auto dark:bg-stone-800 dark:text-white"
  >
    <div v-if="state" class="flex h-full flex-col md:flex-row md:overflow-auto">
      <div
        class="flex h-full min-h-[23rem] flex-col overflow-auto md:min-h-full md:w-1/3"
      >
        <div
          class="flex flex-wrap justify-between border-b border-b border-black px-3 py-2 dark:border-white"
        >
          <div class="pr-3 text-xl font-bold">Analytic Geometry</div>
          <PlaygroundToolbar :state="state" />
        </div>

        <PlaygroundEditor class="h-full w-full" :state="state" />
      </div>

      <div
        class="grow-1 flex h-full min-h-[23rem] flex-col overflow-auto border-t border-black dark:border-white md:min-h-full md:w-2/3 md:border-l md:border-t-0"
      >
        <PlaygroundPlay v-if="state.kind === 'Play'" :state="state" />

        <PlaygroundError
          v-if="state.errorMessage && state.kind === 'Error'"
          :state="state"
          :errorMessage="state.errorMessage"
        />
      </div>
    </div>
  </div>
</template>
