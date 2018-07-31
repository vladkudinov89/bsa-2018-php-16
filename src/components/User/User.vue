<template>
    <div class="ui text container">
        <div class="ui card centered">
            <div class="content">
                <b>ID :</b> {{user.id}}
            </div>
            <div class="image">
                <img :src="user.avatar">
            </div>
            <div class="content">
                <h3 class="header">{{ user.name }}</h3>
                <div class="description">
                    {{ user.email }}
                </div>
            </div>


        </div>
        <div class="ui buttons">
            <button @click="$router.go(-1)" class="ui button"><i class="angle double left icon"></i></button>
            <button @click="$router.push({ name: 'user-albums', params: { id: $route.params.id } })" class="ui button">Albums</button>
            <button @click="$router.push({ name: 'edit-user', params: { id: $route.params.id }})" class="ui button">Edit</button>
            <button @click="deleteUser" class="ui button">Delete</button>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        computed: {
            user() {
                return this.$store.state.users.users[this.$route.params.id];
            },
        },
        methods: {
            deleteUser() {
                this.$store.dispatch('users/deleteUser', this.$route.params.id);
                this.$router.push({name: 'users'});
            }
        }
    }
</script>

<style>

</style>