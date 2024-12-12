<script setup lang="ts">
import { Item } from '@/components'
import { useListStore } from '@/stores'
const { list } = useListStore()
</script>
<template>
<v-card
    class="mx-auto"
    max-width="800"
  >
    <v-list>
        <Item
        v-for="(item, index) in list"
        :key="index"
        :id="item.id" 
        :name="item.name"
        />
    </v-list>
</v-card>
</template>