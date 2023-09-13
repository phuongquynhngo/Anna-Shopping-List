<template>
    <!-- Input field for adding new items -->
  <div class="input-field">
    <input v-model="shoppingListStore.newItem" placeholder="Neues Element hinzufügen" />
    <button @click="addItem">Hinzufügen</button>
  </div>
</template>

<script setup>
import { useShoppingListStore } from "../stores/shoppingListStore.js";

const shoppingListStore = useShoppingListStore();

// Function to add a new item to the shopping list
const addItem = () => {
  if (shoppingListStore.newItem.trim() !== "") {
    shoppingListStore.addItem(shoppingListStore.newItem.trim());
    shoppingListStore.newItem = ""; // Clear the input after adding
  }
};
</script>

<style scoped>
.input-field {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.input-field input {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  min-width: 200px;
  max-width: 400px;
}

.input-field button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

.input-field button:hover {
  background-color: #2074a0;
}
</style>
