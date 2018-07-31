const state = {
    photos: [
        {
            id: 0,
            title: "pass-1",
            urlImg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKROozk1oxCXFfaDf7a0oD4E3MGl4w4GIh8pVgExCWfCtpQT0EHA",
            albumId: 0
        },
        {
            id: 1,
            title: "pass-2",
            urlImg:
                "https://qph.fs.quoracdn.net/main-qimg-81a3190774cc11e925ceffeebe4d74a7",
            albumId: 0
        },
        {
            id: 2,
            title: "pass-3",
            urlImg:
                "https://thumbs.dreamstime.com/b/cargo-van-car-26203806.jpg",
            albumId: 0
        },
        {
            id: 4,
            title: "cargo-1",
            urlImg:
                "https://rawgit.com/vlvereta/bsa-2018-php-16/01fc3b7c4f0107d641a1141c300102ee63639d93/src/assets/albums/dog-preview.jpg",
            albumId: 1
        },
        {
            id: 5,
            title: "cargo-2",
            urlImg:
                "http://img1.static.reweb.io/tiny/0/0/dealers.rewebmkt.com/images/20160929082456-c2429_torqshift.png",
            albumId: 1
        },
        {
            id: 6,
            title: "cargo-3",
            urlImg:
                "http://www.isgloballojistik.com/wp-content/uploads/2018/01/BlobServer.jpg",
            albumId: 1
        },
        {
            id: 7,
            title: "bus-1",
            urlImg:
                "https://static.visitvalencia.com/sites/default/files/styles/full_product/public/albufero_0.jpg?itok=OkJkSiBM",
            albumId: 2
        },
        {
            id: 8,
            title: "bus-2",
            urlImg:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nishitetsu_bus_0102.jpg/1200px-Nishitetsu_bus_0102.jpg",
            albumId: 2
        }
    ]
};
const getters = {
    getAlbumPhotos: state => id => {
        var photos = [];
        state.photos.forEach(function(item) {
            if (item.albumId === id) {
                photos.push(item);
            }
        });
        return photos;
    }
};
const mutations = {
    DELETE_PHOTO(state, id) {
        state.photos.splice(id, 1);
    }
};
const actions = {

    deletePhoto({ commit }, id) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit("DELETE_PHOTO", id);
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