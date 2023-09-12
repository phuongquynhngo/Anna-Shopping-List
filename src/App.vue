<template>
  <div class="list-wrapper">
    <div class="list-container">
      <div class="header"><h1>Anna's Einkaufsliste</h1></div>
      <div class="input-field">
        <input v-model="newItem" placeholder="Neues Element hinzufügen" />
        <button @click="addItem">Hinzufügen</button>
      </div>
      <div class="list-items">
        <!-- Check if shoppingList is empty -->
        <div v-if="shoppingList.length === 0" class="empty-list-message">Die Einkaufsliste ist leer.</div>
        <!-- Render items if shoppingList is not empty -->
        <div v-else v-for="(item, index) in shoppingList" :key="index" class="item-container">
          <div class="item-grid-container">
            <div class="checkbox"><input type="checkbox" v-model="item.completed" @change="updateItem()" /></div>

            <div class="item">
              <div class="item-value" :class="{ 'completed-item': item.completed }">
                {{ item.name }}
              </div>
            </div>
            <div class="remove-btn-container"><button class="remove-btn" @click="removeItem(index)">Entfernen</button></div>
          </div>
        </div>
      </div>
      <div class="clear-btn">
        <button @click="clearList">Liste leeren</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const newItem = ref("");
// const shoppingList = ref([]);
const shoppingList = ref(JSON.parse(localStorage.getItem("shoppingList")) || []);

onMounted(() => {
  // Load shoppingList from localStorage on component mount
  if (localStorage.getItem("shoppingList")) {
    shoppingList.value = JSON.parse(localStorage.getItem("shoppingList"));
  }
});

// Add item to shopping list
function addItem() {
  if (newItem.value !== "") {
    shoppingList.value.push({ name: newItem.value, completed: false });
    newItem.value = "";
    updateLocalStorage();
  }
}

// Remove item from shopping list
function removeItem(index) {
  const confirmed = window.confirm("Bist du sicher, dass du dieses Element löschen möchtest?");
  if (confirmed) {
    shoppingList.value.splice(index, 1);
    updateLocalStorage();
  }
}

// Clear the entire list
function clearList() {
  shoppingList.value = [];
  updateLocalStorage();
}

// Update local storage when check-status of item changes
function updateItem() {
  updateLocalStorage();
}

// Update local storage
function updateLocalStorage() {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList.value));
}
</script>

<style scoped>
.list-wrapper {
  display: flex;
  justify-content: center;
  user-select: none;
}
.list-container {
  min-width: 800px;
  font-family: Arial, sans-serif;
  margin: 2rem;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  color: #3498db;
  font-size: 32px;
  margin: 0;
}

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

.item {
  display: flex;
  justify-content: start;
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
