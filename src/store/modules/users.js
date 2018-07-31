import Vue from "vue";
let lastId = 5;

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
    ADD_USER(state, user) {
        lastId++;
        state.users.push({
            id: lastId,
            name: user.name,
            email: user.email,
            avatar: user.avatar
        });
    },

    EDIT_USER(state, { id, data }) {
        const updatedUser = {
            name: data.name,
            email: data.email,
            avatar: data.avatar
        };

        Vue.set(state.users, id, updatedUser);
    },

    DELETE_USER(state, id) {
        state.users.splice(id, 1);
    }
};

const actions = {
    addUser({ context, commit }, data) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("ADD_USER", data);
                resolve();
            }, 250);
        });
    },

    editUser({ commit }, data) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("EDIT_USER", data);
                resolve();
            }, 250);
        });
    },

    deleteUser({ commit }, id) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("DELETE_USER", id);
                resolve();
            }, 250);
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};