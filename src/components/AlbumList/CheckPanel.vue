<template>
    <div class="ui centered">
        <h2 class="ui header">
            <i class="settings icon"></i>
            <div class="content">
                Albums by users
                <div class="sub header">Check for view user album</div>
            </div>
        </h2>
        <div class="users_checkbox">
            <template v-for="(user, id) in users">
                <div class="ui checkbox" :key="id">
                    <input @change="$emit('clicked', checked)" v-model="checked" type="checkbox" :value="id">
                    <label>{{ user.name }}</label>
                </div>
            </template>
        </div>
        <div class="ui section divider"></div>
    </div>

</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "CheckPanel",
        data() {
            return {
                checked: []
            };
        },
        computed: {
            ...mapState({
                users: state => state.users.users,
            }),
            ...mapGetters({
                usersAmount: 'users/usersAmount'
            })
        },
    }
</script>

<style scoped>
.users_checkbox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>