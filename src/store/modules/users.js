const state = {
    users: [
        {
            id: 1,
            name: "Leanne Graham",
            email: "Sincere@april.biz",
            avatar: "https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png",
        },
        {
            id: 2,
            name: "Ervin Howell",
            email: "Shanna@melissa.tv",
            avatar: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png',
        },
        {
            id: 3,
            name: "Clementine Bauch",
            email: "Nathan@yesenia.net",
            avatar: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png',
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            email: "Julianne.OConner@kory.org",
            avatar: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png',
        },
        {
            id: 5,
            name: "Chelsey Dietrich",
            email: "Lucio_Hettinger@annie.ca",
            avatar: 'https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-teacher-312a499a08079a12-512x512.png',
        }
    ],
};

const getters = {

};

const mutations = {
    filterUser: (state , searchUser) => state.users.filter(function (findUser) {
        console.log(searchUser);
        return findUser.name.indexOf(searchUser) > -1;
    })
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
};