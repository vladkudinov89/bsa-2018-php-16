import Vue from "vue";
import Router from "vue-router";
import Users from "./components/Userlist/Users";
import AddUser from "./components/User/AddUser";


Vue.use(Router);

export default new Router({
    base : '/',
    mode : 'history',
    routes : [
        {
            path  : "/users",
            name : 'users',
            component : Users
        },
        {
            path: "/users/add",
            name: "add-user",
            component: AddUser
        },
    ]
})