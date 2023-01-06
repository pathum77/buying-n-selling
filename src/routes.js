/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/home-scr.vue'
import Items from './views/items-scr.vue'
import Item from './views/item-scr.vue'
import Bid from './views/bid-scr.vue'
import Shop from './views/shop-scr.vue'
import ProfilePersonal from './views/profile-personal-scr.vue'
import PostAd from './views/post-ad-scr.vue'
import PostAdForm from './views/post-ad-form-scr.vue'

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
        path: '/profile',
        component: ProfilePersonal,
        meta: {
            title: 'Profile Persoanl'
        }
    },

    {
        name: 'PostAd',
        path: '/post-ad',
        component: PostAd,
        meta: {
            title: 'Post ad'
        }
    },

    {
        name: 'PostAdForm',
        path: '/post-ad/:main/:sub',
        component: PostAdForm,
        meta: {
            title: 'Post ad form'
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