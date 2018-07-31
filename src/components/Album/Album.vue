<template>
    <div>
        <h1 class="page-header">Album Item</h1>
        <div class="ui section divider"></div>
        <button class='ui primary button add_user-btn' v-on:click="openAddPhoto">
            <i class='photo icon'></i> +Add Photo
        </button>
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
       <h2> Photos:</h2>
        <div class="photos_array">
            <template v-for="photo in photos">
                <div :key="photo.id" >


                    <img class="ui top aligned medium image" :src="photo.urlImg">
                    <div class="">
                        <h4>{{ photo.title }}</h4>
                        <button @click="deletePhoto(photo.id);" class="ui red button">Delete</button>
                    </div>

                </div>
            </template>
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
            },
            photos() {
                return this.$store.getters['photos/getAlbumPhotos'](this.$route.params.id);
            }
        },
        methods: {
            deleteAlbum() {
                this.$store.dispatch('albums/deleteAlbum', this.$route.params.id);
                this.$router.push({ name: 'albums' });
            },
            deletePhoto: function(id) {
                this.$store.dispatch('photos/deletePhoto', id);
            },
            openAddPhoto(){
                this.$router.push({ name: 'add-photo'});
            }
        }
    }
</script>

<style scoped>
    .photos_array{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .user_item_gallery{
        width: 500px;
        margin: 0 auto;
    }
.user_item_gallery a{
    font-size: 26px;
}
</style>