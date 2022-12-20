/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/home-scr.vue'
import Items from './views/items-scr.vue'
import Item from './views/item-scr.vue'
import Bid from './views/bid-scr.vue'
import Shop from './views/shop-scr.vue'
import ProfilePersonal from './views/profile-personal-scr.vue'

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

    {
        name: 'Bid',
        path: '/bid',
        component: Bid,
        meta: {
            title: 'Bid'
        }
    },

    {
        name: 'Shop',
        path: '/shop',
        component: Shop,
        meta: {
            title: 'Shop'
        }
    },

    {
        name: 'Profile-Personal',
        path: '/profile-personal',
        component: ProfilePersonal,
        meta: {
            title: 'Profile Persoanl'
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