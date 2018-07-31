<template>
    <div>
        <h1 class="page-header">Add New Album</h1>
        <div class='ui basic content center aligned segment '>
            <div class='ui centered card'>
                <div class='content'>
                    <div class='ui form'>
                        <div class='field'>
                            <label>Title</label>
                            <input v-model="newAlbum.title" type='text'>
                        </div>
                        <div class='field'>
                            <label>Preview</label>
                            <input v-model="newAlbum.preview" type='text'>
                        </div>

                        <div class='field users_album_add'>
                            <label>To whom belongs</label>
                            <template v-for="(user, id) in users">
                                <div class="ui radio checkbox">
                                    <input type="radio" v-model="newAlbum.userId"
                                           :value="id"
                                           name="optradio" checked>
                                    <label :key="id" class="radio-inline"> {{ user.name }}</label>
                                </div>
                            </template>
                        </div>

                        <div class='ui two button attached buttons'>
                            <button class='ui basic blue button' v-on:click="addAlbum()">
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
    export default {
        name: "AddAlbum",
        data() {
            return {
                newAlbum: {
                    title: '',
                    preview: '',
                    userId: ''
                }
            };
        },
        computed: {
            users() {
                return this.$store.state.users.users;
            }
        },
        methods: {
            addAlbum() {
                if (!this.newAlbum.title || this.newAlbum.userId === undefined) {
                    return;
                }

                this.$store.dispatch('albums/addAlbum', this.newAlbum);
                this.clearForm();
                this.$router.push({name: 'albums'});
            },
            clearForm() {
                this.newAlbum = {
                    title: '',
                    userId: ''
                }
            }
        }
    }
</script>

<style scoped>
.users_album_add{
    display: flex;
    flex-direction: column;
}
</style>