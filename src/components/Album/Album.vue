<template>
    <div>
        <h1 class="page-header">Album Item</h1>
        <div class="ui section divider"></div>
        <div class="ui card user_item_gallery">
            <div class="content">
                <div class="right floated meta"><a @click="$router.push({ name: 'user', params: { id: album.userId }})"><i class="eye icon"></i></a></div>
                <img class="ui avatar image" :src="user.avatar"> {{ user.name }}
            </div>
            <div class="image">
                <img :src="albumViewImg">
            </div>

            <div class="extra content">
                <div class="buttons">
                    <button @click="$router.go(-1)" class="ui black button">Back</button>
                    <button @click="$router.push({ name: 'edit-album', params: { id: $route.params.id } })" class="ui blue button">Edit</button>
                    <button @click="deleteAlbum" class="ui red button">Delete</button>
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
            albumViewImg() {
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
    .user_item_gallery{
        width: 500px;
        margin: 0 auto;
    }
.user_item_gallery a{
    font-size: 26px;
}
</style>