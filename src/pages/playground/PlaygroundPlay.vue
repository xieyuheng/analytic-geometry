<script setup lang="ts">
import Play from '../../components/play/Play.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <Play :mod="state.mod" :tick="state.tick" />
</template>
