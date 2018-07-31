<template>
    <div class="ui container">
        <h1>Users List</h1>
        <!--<template>-->
            <!--<search-user></search-user>-->
        <!--</template>-->
        <!--<div class='search_panel'>-->
            <!--<h2>Search</h2>-->
            <!--<div>-->
                <!--<div class="ui left icon input search_input">-->
                    <!--<input type="text" placeholder="Search users..." v-model="searchUser">-->
                    <!--<i class="users icon"></i>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="">-->
                <!--<div>Select search by</div>-->
                <!--<select class="ui dropdown selection search_select " v-model="searchBy" >-->
                    <!--<option v-for="paramSearch in paramsSearch" v-bind:value="paramSearch.nameParam">-->
                        <!--{{paramSearch.nameParam}}-->
                    <!--</option>-->
                <!--</select>-->
            <!--</div>-->
            <!--<button class="ui primary button" v-bind:class="{disabled : btnSearch }" @click="filterUser()">Search</button>-->
        <!--</div>-->
        <template>
            <search-user @clicked="onShowUserList"></search-user>
        </template>
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

</style>