<template>
    <div>
        <!--<h1 class="page-header">Add User!</h1>-->
        <!--<form class="form-horizontal" @submit.prevent="addUser">-->
            <!--<div class="form-group">-->
                <!--<label class="control-label col-sm-2">Name:</label>-->
                <!--<div class="col-sm-10">-->
                    <!--<input v-model.trim="newUser.name" type="text" class="form-control" id="name" placeholder="Enter name">-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="form-group">-->
                <!--<label class="control-label col-sm-2">Email:</label>-->
                <!--<div class="col-sm-10">-->
                    <!--<input v-model.trim="newUser.email" type="email" class="form-control" id="email" placeholder="Enter email">-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="form-group">-->
                <!--<label class="control-label col-sm-2">Avatar:</label>-->
                <!--<div class="col-sm-10">-->
                    <!--<input v-model.trim="newUser.avatar" type="text" class="form-control" id="avatar" placeholder="Enter avatar source">-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="form-group">-->
                <!--<div class="buttons">-->
                    <!--<button type="submit" class="btn btn-success">Add</button>-->
                    <!--<button @click="$router.push({ name: 'users' })" type="button" class="btn btn-primary">Back</button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</form>-->
        <div class='ui basic content center aligned segment '>
            <div class='ui centered card'>
                <div class='content'>
                    <div class='ui form'>
                        <!--<div class='field'>-->
                            <!--<label>ID</label>-->
                            <!--<input v-model="id" type='text' readonly>-->
                        <!--</div>-->
                        <div class='field'>
                            <label>Name</label>
                            <input v-model="newUser.name" type='text'>
                        </div>
                        <div class='field'>
                            <label>Email</label>
                            <input v-model="newUser.email" type='text'>
                        </div>
                        <!--<div class='field'>-->
                            <!--<label>Avatar</label>-->
                            <!--<input v-model="newUser.avatar" type='text'>-->
                        <!--</div>-->
                        <div class="field">
                            <label>Select avatar</label>
                            <select class="ui dropdown selection search_select " v-model="newUser.avatar" >
                                <option v-for="selAvatar in selectAvatar" v-bind:value="selAvatar.value">
                                    {{selAvatar.nameParam}}
                                </option>
                            </select>
                        </div>
                        <div class='ui two button attached buttons'>
                            <button class='ui basic blue button' v-on:click="addUser()">
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        data() {
            return {
                // selectAvatar : '',
                selectAvatar: [
                    {nameParam : 'man' , value : 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png'},
                    {nameParam : 'woman' , value : 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png'},
                ],
                newUser: {
                    name: '',
                    email: '',
                    avatar: ''
                }
            };
        },
        computed: {
            ...mapState("users", ["users"])
        },
        methods: {
            addUser() {
                if (!this.newUser.name || !this.newUser.email) {
                    return;
                }

                this.$store.dispatch('users/addUser', this.newUser);
                this.clearForm();
                this.$router.push({ name: 'users'});
            },
            clearForm() {
                this.newUser = {
                    name: '',
                    email: '',
                    // avatar: ''
                }
            }
        }
    };
</script>

<style>

</style>