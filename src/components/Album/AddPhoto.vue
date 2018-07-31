<template>
    <div>
        <h1>Add Photo</h1>
        <div class="ui section divider"></div>
        <div class='ui basic content center aligned segment '>
            <div class='ui centered card'>
                <div class='content'>
                    <div class='ui form'>
                        <div class='field'>
                            <label>Title</label>
                            <input v-model="newPhoto.title" type='text' placeholder="Enter title photo">
                        </div>
                        <div class='field'>
                            <label>Enter Image URL:</label>
                            <input v-model="newPhoto.urlImg" type='text' placeholder="Enter image URL">
                        </div>

                        <div class='ui two button attached buttons'>
                            <button class='ui basic blue button' v-on:click="addPhoto()">
                                Add
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
        name: "AddPhoto",
        data() {
            return {
                newPhoto: {
                    title: '',
                    urlImg: '',
                    albumId: this.$route.params.id
                }
            };
        },
        methods: {
            addPhoto() {
                if (!this.newPhoto.title) {
                    return;
                }

                this.$store.dispatch('photos/addPhoto', this.newPhoto);
                this.clearForm();
                this.$router.push({ name: 'album', params: { id: this.$route.params.id }});
            },
            clearForm() {
                this.newPhoto = {
                    title: '',
                    imgUrl: '',
                    albumId: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>