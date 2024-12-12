<script setup lang="ts">
import { ref, watch } from 'vue';
import { addSearch } from './model'

const model = ref()

watch(
  () => model.value,
  (newVal) => {
    addSearch({ words: newVal })
  }
)

</script>
<template>
  <div class="search">
    <v-text-field
        v-model="model"
        hide-details="auto"
        placeholder="Search"
      >
    </v-text-field>
</div>
</template>
<style>
.search {
  position: fixed;
  width: 641px;
  height: 50px;
  background-color: rgb(17, 17, 17);
  z-index: 99;
  
}
.search .v-field__outline {
  border: none;
}
</style>