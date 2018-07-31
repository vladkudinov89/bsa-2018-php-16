<template>
    <div class='search_panel'>
        <h2>Search</h2>
        <div>
            <div class="ui left icon input search_input">
                <input type="text" placeholder="Search users..." v-model="searchUser">
                <i class="users icon"></i>
            </div>
        </div>

        <div class="">
            <div>Select search by</div>
            <select class="ui dropdown selection search_select " v-model="searchBy">
                <option v-for="paramSearch in paramsSearch" v-bind:value="paramSearch.nameParam">
                    {{paramSearch.nameParam}}
                </option>
            </select>
        </div>
        <button class="ui primary button" @click="filterUser">Search</button>

        <table v-if="usersResultFind.length > 0" class="ui very basic collapsing celled table">
            <thead>
            <tr>
                <th>User</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="userResultFind in usersResultFind">
                <td>
                    <h4 class="ui image header">
                        <img :src="userResultFind.avatar" class="ui mini rounded image">
                        <div class="content">
                            {{ userResultFind.name }}

                        </div>
                    </h4>
                </td>
                <td>
                    {{ userResultFind.email }}
                </td>
            </tr>
            </tbody>
        </table>
        <div class="no_result" v-else="usersResultFind">
            <h2>No result</h2>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        data() {
            return {
                usersResultFind: [],
                searchUser: '',
                searchBy: '',
                paramsSearch: [
                    {nameParam: 'name', value: 1},
                    {nameParam: 'email', value: 2}
                ],
            }
        },
        computed: {
            ...mapState({
                users: state => state.users.users
            }),
        },
        methods: {
            filterUser() {
                const searchBy = this.searchBy;
                // console.log(searchBy);
                const searchUser = this.searchUser;
                if (searchBy === 'name') {
                    this.usersResultFind = this.users.filter(function (findUser) {
                        return findUser.name.indexOf(searchUser) > -1;
                    });
                }
                if (searchBy === 'email') {
                    this.usersResultFind = this.users.filter(function (findUser) {
                        return findUser.email.indexOf(searchUser) > -1;
                    });
                }
                // console.log(this.usersResultFind);
            },
        }
    }
</script>

<style scoped>
.no_result{
    margin: 20px 0;
}
</style>