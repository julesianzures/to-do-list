import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ToDoPage from '../views/to-do-page.vue'
import ToDoEdit from '../views/to-do-edit.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/to-do'
    },
    {
        path: '/to-do',
        name: 'ToDoPage',
        component: ToDoPage
    },

    {
        path: '/to-do-edit/:toDoId',
        name: 'ToDoEdit',
        component: ToDoEdit
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router