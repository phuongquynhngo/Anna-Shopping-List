<template>
  <!-- Individual item container -->
  <div class="item-container">
    <div class="item-grid-container">
      <!-- Checkbox for completing the item -->
      <div class="checkbox">
        <input type="checkbox" v-model="item.completed" @change="updateItem" />
      </div>
      <!-- Display the item name -->
      <div class="item">
        <div class="item-value" :class="{ 'completed-item': item.completed }">
          {{ item.name }}
        </div>
      </div>
       <!-- Button to remove the item -->
      <div class="remove-btn-container">
        <button class="remove-btn" @click="removeItem">Entfernen</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import { useShoppingListStore } from "../stores/shoppingListStore.js";

const props = defineProps(["item"]);
const item = ref(props.item);
const shoppingListStore = useShoppingListStore();

const removeItem = () => {
  shoppingListStore.removeItem(props.item.id);
};

const updateItem = () => {
  shoppingListStore.updateItem(props.item);
};

// Watch for changes in the 'item' prop and update the local copy
watch(
  () => props.item,
  (newItem) => {
    item.value = newItem;
  }
);
</script>

<style scoped>
.item-container {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 2rem;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.item-grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
}

.item-value {
  max-width: 100%;
  padding-right: 1rem;
  overflow: hidden;
}

.completed-item {
  text-decoration: line-through;
}

.remove-btn-container {
  display: flex;
  justify-content: end;
}

.remove-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 6rem;
  padding: 0.5rem 0;
  font-size: 16px;
}

.remove-btn:hover {
  background-color: #24a658;
}
</style>
