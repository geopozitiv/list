<script setup lang="ts">
import { IconDelete } from '@/components'
const emit = defineEmits(['deleteItem'])

const deleteItem = () => {
    emit('deleteItem')
}
</script>
<template>
  <div class="d-flex justify-center align-center" @click="deleteItem">
    <IconDelete />
  </div>
</template>