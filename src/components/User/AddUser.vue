<template>
    <div>
        <div class='ui basic content center aligned segment '>
            <div class='ui centered card'>
                <div class='content'>
                    <div class='ui form'>
                        <div class='field'>
                            <label>Name</label>
                            <input v-model="newUser.name" type='text'>
                        </div>
                        <div class='field'>
                            <label>Email</label>
                            <input v-model="newUser.email" type='text'>
                        </div>
                        <div class="field">
                            <label>Select avatar</label>
                            <select class="ui dropdown selection search_select " v-model="newUser.avatar">
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
    import {mapState} from "vuex";

    export default {
        data() {
            return {
                // selectAvatar : '',
                selectAvatar: [
                    {
                        nameParam: 'man',
                        value: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png'
                    },
                    {
                        nameParam: 'woman',
                        value: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png'
                    },
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
                this.$router.push({name: 'users'});
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