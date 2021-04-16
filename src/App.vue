<template>
  <h1>Vue To Do List</h1>
  <div id="nav">
    <router-link :to="{ name: 'ToDoPage' }">Home</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoPage from "./views/to-do-page.vue";

export default defineComponent({
  name: "App",
  components: { ToDoPage },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #eee;
}
</style>