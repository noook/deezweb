<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid px-4">
      <h1>Bienvenue sur Deezweb !</h1>
      <p class="lead">
        L'application qui permet facilement d'écouter de la musique.
      </p>
    </div>
    <div class="random-music">
      <h2>Une musique de vos favoris au hasard:</h2>
      <MusicCard />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MusicCard from '@/components/MusicCard.vue';

export default Vue.extend({
  name: 'home',
  components: {
    MusicCard,
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
  }
}
</style>
