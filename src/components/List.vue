<script setup lang="ts">
import { useListStore } from '@/stores/listStore';
import ItemComponent from '@/components/Item.vue';
import type { Item, List } from '@/types/global';

const { name, list, items } = defineProps<{
    name: string,
    list: List,
    items: Item[],
}>()
const listStore = useListStore()
</script>

<template>
    <ul @dragover.prevent @dragenter.prevent @drop="listStore.dropOnList($event, list.id)">
        <span>
            <h2>{{ name }}</h2>
            <button @click="listStore.createItem(list)">+</button>
        </span>
        <ItemComponent v-for="item in items" :key="item.id" :listId="list.id" :itemId="item.id" :item="item" />
    </ul>
</template>

<style scoped>
ul {
    width: 25%;
    height: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    list-style-type: none;
    padding: 0;

    button {
        border: none;
        border-radius: 4px;
        background-color: lime;
        color: white;
        font-weight: bold;
    }
}
span {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1rem;
}
</style>