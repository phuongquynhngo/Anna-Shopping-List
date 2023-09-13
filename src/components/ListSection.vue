<template>
  <!-- List of items -->
  <div class="list-items">
    <div v-if="shoppingList.length === 0" class="empty-list-message">Die Einkaufsliste ist leer.</div>
    <ListItem v-for="(item) in shoppingList" :key="item.id" :item="item"></ListItem>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useShoppingListStore } from '../stores/shoppingListStore.js';
import ListItem from "./ListItem.vue";

const shoppingListStore = useShoppingListStore();

// Compute the shopping list from the store
const shoppingList = computed(() => shoppingListStore.shoppingList); 

</script>

<style scoped>
.list-items {
  display: flex;
  flex-direction: column;
}

.empty-list-message {
  text-align: center;
  font-size: 1em;
  color: #777;
  padding: 10px;
  margin: 1rem 0;
}
</style>
