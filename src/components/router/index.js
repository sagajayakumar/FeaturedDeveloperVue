import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../Home';
import DevelopersList from '../DevelopersList';

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
    }
]


const router = new VueRouter({
    routes,
});


export default router;