<template>
    <div>
        <h1 class="page-header">Album ID: {{ $route.params.id }}</h1>
        <div class="col-sm-12">
            <div class="panel panel-default album-element">
                <img :src="preview">
                <h3>Title: {{ album.title }}</h3>
                <h3>Owner: <a @click="$router.push({ name: 'user', params: { id: album.userId }})">{{ user.name }}</a></h3>
                <div class="buttons">
                    <button @click="$router.go(-1)" class="btn btn-primary">Back</button>
                    <button @click="$router.push({ name: 'edit-album', params: { id: $route.params.id } })" class="btn btn-warning">Edit</button>
                    <button @click="deleteAlbum" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Album",
        data() {
            return {
            };
        },
        computed: {
            user() {
                return this.$store.state.users.users[this.album.userId];
            },
            album() {
                return this.$store.state.albums.albums[this.$route.params.id];
            },
            preview() {
                return this.$store.getters['albums/getPreview'](this.$route.params.id);
            }
        },
        methods: {
            deleteAlbum() {
                this.$store.dispatch('albums/deleteAlbum', this.$route.params.id);
                this.$router.push({ name: 'albums' });
            }
        }
    }
</script>

<style scoped>

</style>