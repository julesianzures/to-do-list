import { ITodoItem } from '@/models/IToDoItem';
import { ref } from 'vue'

const toDos = ref<ITodoItem[]>([]);

export function useToDo() {
    return { toDos }
}