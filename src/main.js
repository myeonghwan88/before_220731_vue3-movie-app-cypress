import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js' // < 추가 특정 폴더의 index 파일을 가져올 때에는 생략 가능 ./routes
import store from './store/index.js' // < 추가2 특정 폴더의 index 파일을 가져올 때에는 생략 가능 ./store
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) // < 추가 use : 플러그인 $route, $router
  .use(store) // < 추가 vuex store      $store
  .use(loadImage) // $loadImage
  .mount('#app')