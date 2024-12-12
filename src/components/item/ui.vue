<script setup lang="ts">
import { ItemEdit } from '@/components'
import { ref } from 'vue';
defineProps<{
  id: string
  name: string
}>()
const editActive = ref(false)
const selectItem = () => {
    editActive.value = true
    console.log('here');
}
const diselectItem = () => {
    editActive.value = false
}
</script>
<template>
    <div 
        class="py-4 px-4 cursor-pointer border-sm isHovering"
        v-if="!editActive" 
        @click="selectItem"
    >
        {{ name }}
    </div>
    <itemEdit v-click-outside="diselectItem" v-if="editActive" :id="id" :name="name" />
</template>
<style scoped>
.isHovering:hover {
    transition: all 0.8s ease;
    background-color:burlywood;
}
</style>