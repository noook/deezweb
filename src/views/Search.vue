<template>
  <div class="search-view">
    <h1>Recherche</h1>
    <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant:</p>
    <hr>
    <form @submit.prevent="submit">
      <div class="group">
        <label for="query">Titre:</label>
        <input
          v-model="q"
          :placeholder="titlePlaceholder"
          class="form-control form-control-sm"
          id="query"
          type="text">
      </div>
      <div class="group">
        <label for="type">Trier par:</label>
        <select
          v-model="order"
          class="custom-select custom-select-sm"
          name="type"
          id="type">
          <option value="ALBUM_DESC">Album</option>
          <option value="ARTIST_DESC">Artiste</option>
          <option value="TRACK_DESC">Musique</option>
          <option value="RANKING_DESC">Les plus populaires</option>
          <option value="RATING_DESC">Les mieux notés</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Go</button>
    </form>
    <hr>
    <h2 v-if="results !== null">Résultats</h2>
    <div class="results" v-if="results !== null">
      <MusicCard
        :track="music"
        v-for="music in results"
        :key="music.id" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import api from '@/services/api';
import MusicCard from '@/components/MusicCard.vue';

export default Vue.extend({
  name: 'Search',
  components: {
    MusicCard,
  },
  data() {
    return {
      q: '',
      order: 'TRACK_DESC',
      titlePlaceholder: 'Flume, ODESZA, DROELOE, Orelsan, ...',
      results: null,
    };
  },
  methods: {
    async submit() {
      const { q, order } = this;
      const tracks = await api
        .get('/search', {
          params: {
            q,
            order,
          },
        })
        .then(({ data }) => data.data)
        .catch(err => console.log(err)); // eslint-disable-line

      this.results = tracks;
    },
  },
});
</script>

<style lang="scss" scoped>
  .search-view {
    > h1 {
      font-size: 2rem;
      font-weight: 500;
      text-align: left;
      margin: 15px 0;
    }

    > p {
      text-align: left;
      font-size: .9rem;
    }

    > form {
      display: flex;
      justify-content: flex-end;
      > .group {
        display: flex;
        align-items: center;
        margin-right: 150px;

        > label {
          white-space: nowrap;
          margin-right: 15px;
        }

        > input[type="text"] {
          width: 300px;
        }

        > select {
          width: 150px;
        }
      }
    }

    > h2 {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: left;
      margin: 10px 0;
    }

    > .results {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
