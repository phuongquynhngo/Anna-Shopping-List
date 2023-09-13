<template>
  <div class="list-wrapper">
    <div class="list-container">
      <HeaderSection />
      <InputField />
      <ListSection />
      <ClearButton />
    </div>
  </div>
</template>

<script setup>
import HeaderSection from "./components/HeaderSection.vue";
import InputField from "./components/InputField.vue";
import ListSection from "./components/ListSection.vue";
import ClearButton from "./components/ClearButton.vue";

</script>

<style>
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
</style>
