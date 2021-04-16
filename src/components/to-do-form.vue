<template>
  <form @submit.prevent="addnewToDo">
    <label>TODAY</label>
    <input
      type="text"
      class="toDo-input"
      placeholder="Add task"
      v-model="newToDo"
    />
    <button class="button addButton">Add to do</button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from "vue";
import { ITodoItem } from "@/models/IToDoItem";

export default defineComponent({
  name: "ToDoForm",
  props: {
    toDos: {
      type: Array as PropType<ITodoItem[]>,
      required: true,
    },
  },
  setup(props) {
    const newToDo = ref("");
    const editToDo = ref("");
    function addnewToDo() {
      props.toDos.push({
        id: props.toDos.length + 1,
        done: false,
        content: newToDo.value,
      });

      newToDo.value = "";
    }

    return {
      newToDo,
      addnewToDo,
      editToDo,
    };
  },
});
</script>

<style>
.addButton {
  padding: 10px;
  background-color: #7868e6;
  color: white;
  width: 100px;
  margin-left: 320px;
}
</style>