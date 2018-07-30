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
            <select class="ui dropdown selection search_select " v-model="searchBy" >
                <option v-for="paramSearch in paramsSearch" v-bind:value="paramSearch.nameParam">
                    {{paramSearch.nameParam}}
                </option>
            </select>
        </div>
        <button class="ui primary button" v-bind:class="{disabled : btnSearch }" @click="filterUser">Search</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "SearchUser",
        // props : {
        //     users : Array
        // },
        computed: {
            ...mapState({
                users: state => state.users.users,
            }),
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
                const searchBy = this.searchBy;
                console.log(searchBy);
                const searchUser = this.searchUser;
                if (searchBy === 'name') {
                    this.users = this.users.filter(function (findUser) {
                        return findUser.name.indexOf(searchUser) > -1;
                    });
                }
                if (searchBy === 'email') {
                    this.users = this.users.filter(function (findUser) {
                        return findUser.email.indexOf(searchUser) > -1;
                    });
                }
            },
        }
    }
</script>

<style scoped>

</style>