<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid px-4">
      <h1>Bienvenue sur Deezweb !</h1>
      <p class="lead">
        L'application qui permet facilement d'écouter de la musique.
      </p>
    </div>
    <div
      class="random-music"
      v-if="this.$store.state.FAVORITES.length">
      <h2>Une musique de vos favoris au hasard:</h2>
      <MusicCard :track="random" />
      <button
        @click="shuffle"
        type="button"
        class="btn shuffle btn-primary">
        <font-awesome-icon icon="random" />
        Choisir une autre musique
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MusicCard from '@/components/MusicCard.vue';
import { Track } from '@/interfaces/track';

export default Vue.extend({
  name: 'home',
  components: {
    MusicCard,
  },
  data() {
    return {
      key: 0,
    };
  },
  methods: {
    shuffle() {
      this.$store.dispatch('shuffleFavorite');
    },
  },
  computed: {
    random(): Track {
      return this.$store.state.RANDOM_FAVORITE;
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  > .jumbotron {
    > h1, p {
      text-align: left;
    }

    > h1 {
      font-size: 3rem;
      margin: 10px 0;
      font-weight: lighter;
    }
  }

  > .random-music {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 20px 0;
    }

    > .shuffle {
      margin: 10px 0;
    }
  }
}
</style>
