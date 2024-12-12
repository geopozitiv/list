<script setup lang="ts">
import { Item } from '@/components'
import { useListStore } from '@/stores'
import { Search } from '../search';
import { storeToRefs } from 'pinia';
const { getList } = storeToRefs(useListStore())

</script>
<template>
<Search />
<v-card
    class="mx-auto mt-60"
    max-width="641"
    min-width="641"
  >
    <v-list>
        <Item
        v-for="(item, index) in getList"
        :key="index"
        :id="item.id" 
        :name="item.name"
        >
        </Item>
    </v-list>
</v-card>
</template>
<style scoped>
.mt-60 {
    margin-top: 60px;
}
</style>