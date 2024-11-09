<script setup lang="ts">
import { useListStore } from '@/stores/listStore';
import type { Item } from '@/types/global';
const props = defineProps<{
    listId: string,
    itemId: string,
    item: Item,
}>()
const listStore = useListStore()
</script>

<template>
    <li :draggable="true" @dragstart="listStore.startDrag($event, props.listId, props.itemId)">
        <input type="text" v-model="props.item.content" >
    </li>
</template>

<style scoped>
li {
    background-color: lightgray;
    width: 100%;
    padding: 1rem;
    border-radius: 16px;
}
input {
    border: none;
    background: none;
    width: 100%;
    cursor: default;
}
input:focus {
    outline: none;
}
</style>