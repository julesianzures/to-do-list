<template>
  <button @click="markAllDone">Mark all done</button>
  <button @click="uncheckAllDone">Uncheck all done</button>
  <button @click="removeAllToDo">Remove all to do</button>

  <ul>
    <li v-for="(toDo, index) in toDos" :key="toDo.id" class="toDo">
      <div class="addedToDo" :class="{ done: toDo.done }">
        <div class="task" @click="toggleDone(toDo)">
          <input name="checkbox" type="checkbox" :checked="toDo.done" />
          <label for="checkbox">{{ toDo.content }}</label>
        </div>
      </div>
      <router-link :to="{ name: 'ToDoEdit', params: { toDoId: toDo.id } }">
        <button class="button taskEditButton" @click.self="editToDo">
          Edit
        </button>
      </router-link>
      <button class="button taskDeleteButton" @click="removeToDo(index)">
        Delete
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodoItem } from "@/models/IToDoItem";

export default defineComponent({
  name: "ToDoList",
  props: {
    toDos: {
      type: Array as PropType<ITodoItem[]>,
      required: true,
    },
  },
  setup(props) {
    function toggleDone(toDo: ITodoItem) {
      toDo.done = !toDo.done;
    }

    function removeToDo(index: number) {
      props.toDos.splice(index, 1);
    }

    function markAllDone() {
      props.toDos.forEach((toDo) => (toDo.done = true));
    }

    function uncheckAllDone() {
      props.toDos.forEach((toDo) => (toDo.done = false));
    }

    function removeAllToDo() {
      props.toDos.length = 0;
    }

    return {
      toggleDone,
      removeToDo,
      markAllDone,
      uncheckAllDone,
      removeAllToDo,
    };
  },
});
</script>

<style>
.task {
  position: absolute;
  text-align: left;
  margin-left: 450px;
}

.taskEditButton {
  margin: 0 10px 0 0;
  width: 70px;
  margin-left: 290px;
  background-color: #5c7be2;
  color: white;
}

a {
  text-decoration: none;
}

.taskDeleteButton {
  width: 88px;
  margin-left: 5px;
  background-color: rgb(216, 83, 59);
  color: white;
}
</style>