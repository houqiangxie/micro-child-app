import './public-path';
import { createApp } from 'vue'
import App from './App.vue'
let router = null;
let app = createApp(App);
function render(props) {
    const {
        container
    } = props;
    
    app.use(router)
        .mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    
}
export async function mount(props) {
    render(props);
}
export async function unmount() {
    app.$destroy();
    app.$el.innerHTML = '';
    app = null;
    router = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
    console.log('props: ', props);
    
}



// 注册 Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
