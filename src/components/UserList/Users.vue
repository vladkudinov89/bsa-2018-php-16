<template>
    <div class="ui container">
        <h1>Users List</h1>
        <!--<template>-->
            <!--<search-user></search-user>-->
        <!--</template>-->
        <div class='search_panel'>
            <h2>Search</h2>
            <div>
                <div class="ui left icon input search_input">
                    <input type="text" placeholder="Search users..." v-model="searchUser">
                    <i class="users icon"></i>
                </div>
            </div>
            <!--<div class="" v-for="filterItem in filterUser">-->
                <!--<h3>{{filterItem.name}}</h3>-->
            <!--</div>-->

            <div class="">
                <div>Select search by</div>
                <select class="ui dropdown selection search_select " v-model="searchBy" >
                    <option v-for="paramSearch in paramsSearch" v-bind:value="paramSearch.nameParam">
                        {{paramSearch.nameParam}}
                    </option>
                </select>
            </div>
            <button class="ui primary button" v-bind:class="{disabled : btnSearch }" @click="filterUser()">Search</button>
        </div>
        <div class="ui cards">
            <template v-for="(user, id) in users">
                <user-item :key="id" :index="id" :user="user"></user-item>
            </template>
        </div>
    </div>
</template>

<script>

    import {mapState , mapMutations} from 'vuex';
    import UserItem from './UserItem';
    // import users from "../../store/modules/users";
    // import SearchUser from './SearchUser'

    export default {
        name: "Users",
        components: {
            UserItem,
            // SearchUser
        },
        data(){
            return {
                searchUser: '',
                searchBy: '',
                btnSearch: true,
                paramsSearch: [
                    {nameParam: 'name', value: 1},
                    {nameParam: 'email', value: 2}
                ],
            }
        },
        watch: {
            searchBy: function () {
                if (this.searchBy.length > 0) {
                    this.btnSearch = false;
                }
            }
        },
        methods : {
            filterUser() {
              this.$store.commit('filterUser' ,this.searchUser);
            },
            // ...mapMutations({
            //     add: 'filterUser' // map `this.add()` to `this.$store.commit('increment')`
            // }),
            // ...mapMutations([
            //    'filterUser'
            // ]),
            // filterUser() {
            //   this.$store.commit('filterUser',this.searchUser);
            // },
            // filterUser() {
            //     const searchBy = this.searchBy;
            //     // console.log(searchBy);
            //     const searchUser = this.searchUser;
            //     // console.log(users.state.users);
            //     // if (searchBy === 'name') {
            //     //     users.state.users = users.state.users.filter(function (findUser) {
            //     //         return findUser.name.indexOf(searchUser) > -1;
            //     //     });
            //     // }
            //     // if (searchBy === 'email') {
            //     //     users.state.users = users.state.users.filter(function (findUser) {
            //     //         return findUser.email.indexOf(searchUser) > -1;
            //     //     });
            //     // }
            // },
        },
        computed: {
            ...mapState({
                users: state => state.users.users,
            }),

            // ...mapGetters([
            //     'filterUser'
            // ])
        }
    }
</script>

<style scoped>

</style>