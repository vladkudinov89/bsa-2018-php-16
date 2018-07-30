import Vue from "vue";
import Router from "vue-router";
import Users from "./components/Userlist/Users";


Vue.use(Router);

export default new Router({
    base : '/',
    mode : 'history',
    routes : [
        {
            path  : '/users',
            component : Users
        }
    ]
})