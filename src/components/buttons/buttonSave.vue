<script setup lang="ts">
import { IconSave } from '@/components'
const emit = defineEmits(['saveItem'])

const save = () => {
    emit('saveItem')
}
</script>
<template>
  <div class="d-flex justify-center align-center" @click="save">
    <IconSave />
  </div>
</template>