<template>
    <div class="ui container">
        <h1>Users List</h1>
        <div class="ui section divider"></div>
        <template>
            <search-user @clicked="onShowUserList"></search-user>
        </template>
        <div class="ui section divider"></div>
        <button class='ui primary button add_user-btn' v-on:click="openAddUser">
            <i class='user icon'></i> +Add User
        </button>
        <div class="ui section divider"></div>
        <div class="ui cards">
            <template v-for="(user, id) in users">
                <user-item :key="id" :index="id" :user="user"></user-item>
            </template>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex';
    import UserItem from './UserItem';
    import SearchUser from './SearchUser'

    export default {
        name: "Users",
        components: {
            UserItem,
            SearchUser
        },
        data(){
            return {
                showUserList: true
            }
        },
        methods : {
            onShowUserList(value) {
                this.showUserList = value;
            },
            openAddUser(){
                this.$router.push({ name: 'add-user'});
            }
        },
        computed: {
            ...mapState({
                users: state => state.users.users,
            }),

        }
    }
</script>

<style scoped>
.add_user-btn{
    margin-bottom: 20px;
}
</style>