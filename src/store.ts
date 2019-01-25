import Vue from 'vue';
import Vuex from 'vuex';
import {
  loadLocalStorage, toggleFavorites, saveFavorites, shuffle,
} from './services/MusicServices';
import { Track } from './interfaces/track';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    FAVORITES: loadLocalStorage(),
    RANDOM_FAVORITE: loadLocalStorage().length ? shuffle(loadLocalStorage())[0] : null,
  },
  mutations: {
    UPDATE_FAVORITES(state, track: Track) {
      toggleFavorites(state.FAVORITES, track);
      saveFavorites(state.FAVORITES);
    },
    SHUFFLE_FAVORITES(state) {
      Vue.set(state, 'RANDOM_FAVORITE', loadLocalStorage().length ? shuffle(loadLocalStorage())[0] : null);
    },
  },
  actions: {
    updateFavorites(context, track: Track) {
      context.commit('UPDATE_FAVORITES', track);
      context.commit('SHUFFLE_FAVORITES');
    },
    shuffleFavorite(context) {
      context.commit('SHUFFLE_FAVORITES');
    },
  },
});
