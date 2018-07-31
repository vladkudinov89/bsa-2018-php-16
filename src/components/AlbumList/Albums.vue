<template>
    <div class="ui centered container">
        <h1 class="page-header">Albums List</h1>
        <div class="ui section divider"></div>
        <router-link :to="{ name: 'add-album' }"><button class='ui primary button add_user-btn'>
            <i class="file image outline icon"></i> +New Album
        </button></router-link>
        <div class="ui section divider"></div>
        <template>
            <check-panel @clicked="onClickCheckPanel"></check-panel>
        </template>

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