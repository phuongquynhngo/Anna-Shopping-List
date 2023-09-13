<template>
  <div class="clear-btn">
    <button @click="clearList">Liste leeren</button>
  </div>
</template>

<script setup>
import { useShoppingListStore } from "../stores/shoppingListStore.js";
const shoppingListStore = useShoppingListStore();

const clearList = () => {
  shoppingListStore.clearList();
};
</script>

<style scoped>
.clear-btn {
  text-align: center;
  margin-top: 2rem;
}

.clear-btn button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.clear-btn button:hover {
  background-color: #2074a0;
}
</style>
