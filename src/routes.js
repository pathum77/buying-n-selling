/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/home-scr.vue'
import Items from './views/items-scr.vue'
import Item from './views/item-scr.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Home'
        }
    },

    {
        name: 'Items',
        path: '/items',
        component: Items,
        meta: {
            title: 'Items'
        }
    },

    {
        name: 'Item',
        path: '/item',
        component: Item,
        meta: {
            title: 'Item'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 };
      }
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
})

export default router;