<script setup lang="ts">
import { ref } from 'vue';
import { rules, saveItemApi, deleteItemApi } from './'
import { ButtonSave, ButtonDelete } from '@/components'

const props = defineProps<{
  id: string
  name: string
}>()

const model = ref()
const activeSaved = ref(false)
const activeDeleted = ref(false)
const deleted = ref(false)

const deleteItem = () => {
  activeDeleted.value = true
  setTimeout(() => {
    deleteItemApi({id: props.id })
    activeDeleted.value = false
    deleted.value = true
  }, 1000)
}

const saveItem = () => {
  saveItemApi({id: props.id, data: model.value})
  activeSaved.value = true
  setTimeout(() => activeSaved.value = false, 1000)
}
</script>
<template>
  <div v-if="!deleted" class="position-relative">
    <div v-if="activeSaved" class="message-saved">SAVED</div>
    <div v-if="activeDeleted" class="message-saved bg-red">DELETED</div>
    <v-text-field
      v-model="model"
      :rules="rules"
      hide-details="auto"
      :placeholder="name"
    >

  </v-text-field>
  <div class="buttons">
    <ButtonSave @saveItem="saveItem"  class="w-100 cursor-pointer fill-height hover-green" />
    <ButtonDelete @deleteItem="deleteItem" class="w-100 cursor-pointer fill-height hover-red" />
  </div>
  </div>
</template>
<style>
.v-input__details {
  position: absolute;
  top: -3px;
}
.buttons {
  position: block;
  right: 0px;
  top: 0px;
  display: flex;
  width: 100%;
  height:54px;
  justify-content: space-around;
  align-items: center;
  z-index: 9000;
  background-color: rgb(255, 255, 255);
}
.hover-green:hover {
  background-color: chartreuse;
}
.hover-red:hover {
  background-color: rgb(215, 47, 47);
}
.message-saved {
  position: absolute;
  top: 0;
  background-color: chartreuse;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  z-index: 9;
  transition: all 0.8s ease;
}
</style>