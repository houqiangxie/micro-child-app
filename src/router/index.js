import { createRouter, createWebHashHistory } from "vue-router";



const routes = [
    {
        path: '/app-child',
        name: 'Index',
        component:()=>import('../views/index.vue')
    },
    {
        path: '/app-child/a',
        name: 'A',
        component:()=>import('../views/a.vue')
    },
    {
        path: '/:pathMatch(.*)*',
       redirect: '/app-child'
    }
]


export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(window.__MICRO_APP_BASE_ROUTE__ || (window.__POWERED_BY_QIANKUN__ ? '/app-child/' : '/')),
    routes, // short for `routes: routes
})