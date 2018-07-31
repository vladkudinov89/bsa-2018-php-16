<template>
    <div class="ui items">
        <div class="item">
            <div class="ui big image">
                <router-link :to="{ name: 'album', params: { id: index }}" ><img class="preview" :src="previewImage"></router-link>
            </div>
            <div class="middle aligned content">
                <h2>{{ album.title }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlbumItem",
        props: {
            index: Number,
            album: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
            };
        },
        computed: {
            previewImage() {
                return this.$store.getters['albums/getPreview'](this.index);
            }
        }
    }
</script>

<style scoped>

</style>