<template>
    <div class="ui container">
        <h1 class="page-header">Albums List</h1>
        <template>
            <check-panel @clicked="onClickCheckPanel"></check-panel>
        </template>
        <div class="row">
            <div class="col-sm-12">
                <router-link :to="{ name: 'add-album' }"><button class="btn btn-success add-album-btn">Create new album</button></router-link>
            </div>
        </div>
        <template v-for="(album, id) in albums">
            <album-item :key="id" :index="id" :album="album"></album-item>
        </template>
    </div>
</template>

<script>
    import CheckPanel from './CheckPanel';
    import AlbumItem from './AlbumItem';
    export default {
        components: {
            CheckPanel,
            AlbumItem
        },
        data() {
            return {
                checked: []
            };
        },

        computed: {
            albums() {
                return this.$store.getters['albums/getCheckedAlbums'](this.checked);
            },

        },
        methods: {
            onClickCheckPanel(checkedInChild) {
                this.checked = checkedInChild;
            }
        }
    }
</script>

<style>

</style>