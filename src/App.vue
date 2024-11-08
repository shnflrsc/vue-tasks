<script setup lang="ts">
import { useListStore } from './stores/listStore';
import ListComponent from '@/components/List.vue';

const listStore = useListStore()
</script>

<template>
  <header>
    <h1>Vue Tasks</h1>
  </header>

  <main>
    <section class="container">
      <ListComponent v-for="list in listStore.getLists" :key="list.id" :name="list.name" :list="list" :items="list.items" />
    </section>
  </main>
</template>

<style scoped>
header {
  h1 {
    text-align: center;
  }
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 5rem;
}
</style>
