import { createRouter, createWebHashHistory } from "vue-router";



const routes = [
    {
        path: '/',
        name: 'Index',
        component:()=>import('../views/index.vue')
    },
    {
        path: '/app-child',
        name: 'Index',
        component:()=>import('../views/index.vue')
    }
]


console.log(' window.__POWERED_BY_QIANKUN__: ',  window.__POWERED_BY_QIANKUN__);
export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
    base: window.__POWERED_BY_QIANKUN__ ? '/app-child/' : '/',
})