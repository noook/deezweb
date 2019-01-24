<template>
  <div class="search-view">
    <h1>Recherche</h1>
    <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant:</p>
    <hr>
    <form>
      <div class="group">
        <label for="query">Titre:</label>
        <input
          v-model="query"
          :placeholder="titlePlaceholder"
          class="form-control form-control-sm"
          id="query"
          type="text">
      </div>
      <div class="group">
        <label for="type">Trier par:</label>
        <select
          v-model="type"
          class="custom-select custom-select-sm"
          name="type"
          id="type">
          <option value="ALBUM_ASC">Album</option>
          <option value="ARTIST_ASC">Artiste</option>
          <option value="TRACK_ASC">Musique</option>
          <option value="RANKING">Les plus populaires</option>
          <option value="RATING_ASC">Les mieux notés</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Go</button>
    </form>
    <hr>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Search',
  data() {
    return {
      query: '',
      type: 'TRACK_ASC',
      titlePlaceholder: 'Flume, ODESZA, DROELOE, Orelsan, ...',
    };
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
  }
</style>
