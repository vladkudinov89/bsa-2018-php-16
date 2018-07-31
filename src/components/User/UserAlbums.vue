<template>
    <div>
        <h1 class="page-header">{{ this.user.name }}'s albums</h1>
        <div v-if="albums.length">
        <template v-for="album in albums">
            <AlbumItem :key="album.id" :index="album.id" :album="album"></AlbumItem>
        </template>
        </div>
        <div v-else="albums">
            <h2>{{ this.user.name }} do not have an album yet.</h2>
        </div>
    </div>
</template>

<script>
    import AlbumItem from './../AlbumList/AlbumItem';

    export default {
        name: "UserAlbums",
        components: {
            AlbumItem
        },
        data() {
            return {};
        },
        computed: {
            user() {
                return this.$store.state.users.users[this.$route.params.id];
            },
            albums() {
                console.log(this.$store.getters['albums/getUserAlbums'](this.$route.params.id));
                return this.$store.getters['albums/getUserAlbums'](this.$route.params.id);
            },
        },
    }
</script>

<style scoped>

</style>