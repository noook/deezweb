<template>
  <div class="favorites-view">
    <h1>Mes favoris</h1>
    <h5>Liste de mes titres favoris</h5>
    <hr>
    <MusicCardList
      v-if="$store.state.FAVORITES.length"
      :tracks="$store.state.FAVORITES" />
    <h2 v-else>Aucun favoris dans votre liste ...</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MusicCardList from '@/components/MusicCardList.vue';

export default Vue.extend({
  name: 'FavoriteView',
  components: {
    MusicCardList,
  },
});
</script>

<style lang="scss" scoped>
  .favorites-view {
    > h1 {
      font-size: 2rem;
      text-align: left;
      font-weight: 500;
      margin: 10px 0;
    }

    > h5 {
      text-align: left;
      font-size: .9rem;
    }

    > h2 {
      font-size: 1.5rem;
      text-align: left;
      font-weight: 500;
    }
  }
</style>
