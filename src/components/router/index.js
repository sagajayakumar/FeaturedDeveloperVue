import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../Home';
import DevelopersList from '../DevelopersList';
import Login from '../Login';
Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: Home
    }, {
        path: "/home",
        component: Home,
    },
    {
        path: "/developersList",
        component: DevelopersList,
    },
    {
        path: "/login",
        component: Login,
    }
]


const router = new VueRouter({
    routes,
});


export default router;