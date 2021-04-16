<template>
  <ToDoForm :toDos="toDos" />
  <ToDoList :toDos="toDos" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ToDoForm from "../components/to-do-form.vue";
import ToDoList from "../components/to-do-list.vue";
import { useToDo } from "@/composables/useToDos";

export default defineComponent({
  name: "ToDoPage",
  components: { ToDoForm, ToDoList },
  setup() {
    const { toDos } = useToDo();

    return { toDos };
  },
});
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

.toDo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  display: block;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
}

label {
  display: inline-block;
  margin: 25px 0 15px;
  letter-spacing: 0.5px;
  font-weight: bold;
}

button {
  display: inline;
  width: 150px;
  padding: 10px 18px;
  margin: 20px 10px auto;
  background: #ddd;
  border-radius: 20px;
  border: 0;
}

ul {
  display: list-item;
  font-size: 16px;
  list-style-type: none;
  padding: 0;
}

.addedToDo[type="checkbox"] {
  display: inline-block;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.done label {
  text-decoration: line-through;
  color: red;
}
</style>