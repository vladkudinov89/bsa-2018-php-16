<template>
    <div class="card">

        <div class="content">
            <img class="right floated mini ui image" :src="user.avatar" alt="">
            <div class='meta text-left'>
                <span class="meta_user">ID:</span> {{ user.id }}
            </div>
            <div class='meta text-left'>
                <span class="meta_user">Name:</span> {{ user.name }}
            </div>
            <div class='meta text-left'>
                <span class="meta_user">Email:</span> {{ user.email }}
            </div>
        </div>
        <div class="extra content">
            <div class="ui two buttons">
                <div class="ui basic green button">Edit</div>
                <div class="ui basic red button">Delete</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "UserItem",
        props: {
            index: Number,
            user: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style scoped>
    .header img {
        width: 50px;
        height: 50px;
    }

    .meta_user {
        font-weight: bold;
        color: #000;
        display: block;
    }

    .text-left {
        text-align: left;
    }
    .card:hover{
        cursor: pointer;
        transition: 0.3s ease-in;
        box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.75);
    }
</style>