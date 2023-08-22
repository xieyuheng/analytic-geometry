<script setup lang="ts">
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
  <div v-if="state">
    <PlaygroundPlay v-if="state.kind === 'Play'" :state="state" />
  </div>
</template>
