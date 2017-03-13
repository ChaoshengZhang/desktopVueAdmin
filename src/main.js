import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './style/reset.css';
import './style/iconfont.css';
import './style/main.css';

Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount("#app")
