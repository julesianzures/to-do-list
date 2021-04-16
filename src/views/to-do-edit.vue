<template>
  <form @submit.prevent="editToDo">
    <label>EDIT TO DO</label>
    <input type="text" class="toDo-input" v-model="newTodoContent" />
    <button class="editButton" type="submit">Save Changes</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { useToDo } from "@/composables/useToDos";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ToDoEdit",
  setup(props) {
    const { toDos } = useToDo();

    const { params } = useRoute();

    const toDoId = +params.toDoId as number;

    const toDo = toDos.value.find((x) => x.id === toDoId);

    const newTodoContent = ref("");
    if (toDo) {
      newTodoContent.value = toDo.content;
    }

    function editToDo() {
      if (toDo) {
        toDo.content = newTodoContent.value;
      }
    }

    return {
      editToDo,
      toDo,
      newTodoContent,
    };
  },
});
</script>

<style>
.editButton {
  padding: 10px;
  background-color: #7868e6;
  color: white;
  width: 150px;
  margin-left: 270px;
  cursor: pointer;
}
</style>
