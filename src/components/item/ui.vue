<script setup lang="ts">
import { ItemEdit } from '@/components'
import { ref } from 'vue';
import { addItemApi } from './model'
const props = defineProps<{
  id: string
  name: string
}>()
const editActive = ref(false)
const selectItem = () => {
    editActive.value = true
}
const diselectItem = () => {
    editActive.value = false
}
const addItem = () => {
    addItemApi({ id: props.id })
}
</script>
<template>
    <div v-if="!editActive"  class="flex d-flex">
        <div 
            class="py-4 px-4 w-100 cursor-pointer border-sm isHovering"
            @click="selectItem"
        >
            {{ name }}
        </div>
        <div class="add" @click="addItem">+</div>
    </div>
    <itemEdit v-click-outside="diselectItem" v-if="editActive" :id="id" :name="name" />
</template>
<style scoped>
.isHovering:hover {
    transition: all 0.8s ease;
    background-color:burlywood;
}
.add {
    width: 40px;
    background-color: cadetblue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: blanchedalmond;
    border-bottom: solid 1px #ddd;
    font-size: 22px;
    cursor: pointer;
}
.add:hover {
    transition: all 0.8s ease;
    background-color: green;
    color: azure;
}
</style>