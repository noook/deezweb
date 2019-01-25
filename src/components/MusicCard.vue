<template>
  <div class="music-card card">
    <div class="card-body">
      <div class="row">
        <img class="thumbnail" :src="track.album.cover" alt="thumbnail">
        <div class="infos">
          <p class="title">{{ track.title_short }}</p>
          <p class="artists">{{ track.artist.name }}</p>
        </div>
      </div>
      <audio
        :src="track.preview"
        controls>
      </audio>
      <div class="action">
        <div
          @click="toggle"
          class="favorite-action"
          :class="{ added: isFavorite }">
          <font-awesome-icon
            :icon="isFavorite ? 'heart-broken' : 'heart'" />
          {{ isFavorite ? removeFromFavorites : addToFavorites }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Track } from '@/interfaces/track';

export default Vue.extend({
  name: 'MusicCard',
  props: {
    track: {
      required: true,
      type: Object as () => Track,
    },
  },
  data() {
    return {
      addToFavorites: 'Ajouter aux favoris',
      removeFromFavorites: 'Retirer des favoris',
    };
  },
  methods: {
    toggle() {
      this.$store.dispatch('updateFavorites', this.track);
    },
  },
  computed: {
    isFavorite(): Boolean {
      return this.$store.state.FAVORITES
        .map((item: Track) => item.id)
        .includes(this.track.id);
    },
  },
});
</script>

<style lang="scss" scoped>
  .music-card {
    .card-body {
      padding: 15px 20px;

      > .row {
        margin: inherit;
        display: flex;
        flex-wrap: nowrap;

        > .thumbnail {
          margin-right: 10px;
          width: 60px;
          height: 60px;
        }

        > .infos {
          > p {
            text-align: left;
            margin-bottom: 5px;

            &.title {
              font-weight: bold;
            }

            &.artists {
              font-size: .9rem;
              color: #6E7680;
              font-weight: bold;
            }
          }
        }
      }

      > audio {
        margin: 10px 0;
        border-radius: 20px;
      }

      > .action {
        display: flex;
        justify-content: center;

        > .favorite-action {
          font-family: .8rem;
          padding: 5px;
          display: block;
          border-radius: 4px;
          color: #CB444A;
          border: solid 1px #CB444A;
          font-size: .9rem;

          &.added {
            background-color: #CB444A;
            color: #fff;
          }

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
