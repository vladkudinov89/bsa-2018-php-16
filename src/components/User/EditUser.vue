<template>
    <div>
        <h1 class="page-header">Edit User</h1>

        
            <form class="ui form" @submit.prevent="editUser">
                <div class="seven wide field">
                    <label class="control-label col-sm-2">Name:</label>
                        <input v-model.trim=" userEditData.name" type="text" class="form-control" id="name" placeholder="Enter name">
                </div>
                <div class="seven wide field">
                    <label class="control-label col-sm-2">Email:</label>
                        <input v-model.trim="userEditData.email" type="email" class="form-control" id="email" placeholder="Enter email">
                </div>
                <div class="seven wide field">
                    <label class="control-label col-sm-2">Avatar:</label>
                    <select class="ui dropdown selection search_select " v-model="userEditData.avatar" >
                        <option v-for="selAvatar in selectAvatar" v-bind:value="selAvatar.value">
                            {{selAvatar.nameParam}}
                        </option>
                    </select>
                </div>
                <div class="seven wide field">
                    <div class="buttons">
                        <button @click="$router.push({ name: 'user', params: { id: $route.params.id } })" type="button" class="ui secondary button"><i class="angle double left icon"></i></button>
                        <button type="submit" class="ui primary button">Edit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selectAvatar: [
                    {nameParam : 'man' , value : 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png'},
                    {nameParam : 'woman' , value : 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png'},
                ],
            };
        },
        computed: {
            user() {
                return this.$store.state.users.users[this.$route.params.id];
            },
            userEditData() {
                return {
                    name: this.user.name,
                    email: this.user.email,
                    avatar: this.user.avatar
                };
            }
        },
        methods: {
            editUser() {
                const data = {
                    id: this.$route.params.id,
                    data: {
                        name: this.userEditData.name,
                        email: this.userEditData.email,
                        avatar: this.userEditData.avatar
                    }
                };
                this.$store.dispatch("users/editUser", data);
                this.$router.go(-1);
            }
        }
    }
</script>

<style>
    .center{
        /*display: flex;*/
    }
</style>