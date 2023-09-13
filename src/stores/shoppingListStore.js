import { defineStore } from 'pinia';

export const useShoppingListStore = defineStore('shoppingList', {
  state: () => ({
    newItem: '',
    shoppingList: JSON.parse(localStorage.getItem('shoppingList')) || [],
    nextItemId: JSON.parse(localStorage.getItem('nextItemId')) || 1, // Initialize a counter for generating unique IDs
  }),
  actions: {
    // Add a new item
    addItem(newItemText) {
      if (newItemText !== "") {
        // Create a new item and append it to the shopping list
        this.shoppingList = [...this.shoppingList, { id: this.nextItemId, name: newItemText, completed: false }];
        this.nextItemId++; 
        this.updateLocalStorage(); 
      }
    },

    // Remove an item
    removeItem(id) {
      const confirmed = window.confirm("Bist du sicher, dass du dieses Element löschen möchtest?");
      if (confirmed) {
        // Filter out the item with the specified ID and update the list
        this.shoppingList = this.shoppingList.filter(item => item.id !== id);
        this.updateLocalStorage(); // Save the updated list to local storage
      }
    },

    // Update an item
    updateItem(updatedItem) {
      // Map through the list and update the item with matching ID
      this.shoppingList = this.shoppingList.map(item => {
        if (item.id === updatedItem.id) {
          return { ...item, completed: updatedItem.completed };
        }
        return item;
      });
      this.updateLocalStorage();
    },

    // Clear all items
    clearList() {
      this.shoppingList = []; 
      this.updateLocalStorage(); 
    },

    // Update local storage with the latest shopping list and next item ID
    updateLocalStorage() {
      localStorage.setItem("nextItemId", JSON.stringify(this.nextItemId)); 
      localStorage.setItem("shoppingList", JSON.stringify(this.shoppingList)); 
    }
  }
});
