import Vue from 'vue'
import App from './App.vue'
import router from "./components/router";
import axios from "axios";
import { Auth0Plugin } from "./auth";
import { domain, clientId } from "../auth_config.json";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './registerServiceWorker'
import {
    faTwitter,
    faFacebook,
    faStackOverflow,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

library.add(faSpinner);
library.add(faTwitter, faFacebook, faStackOverflow, faGithub);
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

Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
        router.push(
            appState && appState.targetUrl ?
            appState.targetUrl :
            window.location.pathname
        );
    }
});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')