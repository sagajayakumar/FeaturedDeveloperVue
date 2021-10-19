import Vue from 'vue'
import App from './App.vue'
import router from "./components/router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './registerServiceWorker'


library.add(faSpinner);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.prototype.$axios = axios.create({


    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
})


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')