<template>
  <div class="music-card-list">
    <MusicCard
      v-for="track in tracks"
      :track="track"
      :key="track.id"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Track } from '@/interfaces/track';

import MusicCard from '@/components/MusicCard.vue';

export default Vue.extend({
  name: 'MusicCardList',
  components: {
    MusicCard,
  },
  props: {
    tracks: {
      required: true,
      type: Array as () => Array<Track>,
    },
  },
});
</script>

<style lang="scss" scoped>
  .music-card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
</style>
