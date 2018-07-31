const state = {
    albums: [
        {
            id : 0,
            title: "Passenger",
            preview:
                "https://reono.ua/uploads/news/9/1/8234/0dcc63719b40b54918f5e3c061baed2c_display.jpeg",
            userId: 0
        },
        {
            id : 1,
            title: "Cargo",
            preview:
                "http://kredit-ubanka.ru/images/kredit_na_gruzovoy_avtomobil-full-2.jpg",
            userId: 1
        },
        {
            id : 2,
            title: "Bus",
            preview:
                "http://bus.ck.ua/images/auto/1.jpg",
            userId: 2
        }
    ]
};

const getters = {
    getUserAlbums: state => id => {
        var albums = [];
        state.albums.forEach(function(item) {
            if (item.userId === id) {
                albums.push(item);
            }
        });
        return albums;
    },

    getCheckedAlbums: state => checked => {
        if (!checked.length) return state.albums;

        var albums = [];
        checked.sort();
        checked.forEach(function(item, i, arr) {
            state.albums.forEach(function(item2, i2, arr2) {
                if (item2.userId === item) {
                    albums.push(item2);
                }
            });
        });
        return albums;
    },

    getPreview: state => id => {
        return state.albums[id].preview;
    }
};

const mutations = {
    ADD_ALBUM(state, album) {
        state.albums.push({
            title: album.title,
            preview: album.preview,
            userId: album.userId
        });
    },

    DELETE_ALBUM(state, id) {
        state.albums.splice(id, 1);
    }
};

const actions = {
    addAlbum({ context, commit }, data) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("ADD_ALBUM", data);
                resolve();
            }, 250);
        });
    },

    deleteAlbum({ commit }, id) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("DELETE_ALBUM", id);
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