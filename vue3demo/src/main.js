import {createApp} from "vue"

import VueApp from "./App";
import router from "./router";  /*//其中 /index index可以省略 如果是其他的名称则不能省略 */
import store from './store';  /*//其中 /index index可以省略 如果是其他的名称则不能省略 */

//创建 组件VueApp 挂在到 index.html的#app上
createApp(VueApp).use(store).use(router).mount("#app")