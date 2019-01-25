import Vue from 'vue';
import Vuex from 'vuex';
import { loadLocalStorage, toggleFavorites, saveFavorites } from './services/MusicServices';
import { Track } from './interfaces/track';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    FAVORITES: loadLocalStorage(),
  },
  mutations: {
    UPDATE_FAVORITES(state, track: Track) {
      toggleFavorites(state.FAVORITES, track);
      saveFavorites(state.FAVORITES);
    },
  },
  actions: {
    updateFavorites(context, track: Track) {
      context.commit('UPDATE_FAVORITES', track);
    },
  },
});
