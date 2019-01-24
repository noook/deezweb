<template>
  <div class="music-card card">
    <div class="card-body">
      <div class="row">
        <img class="thumbnail" src="https://api.deezer.com/album/10532282/image" alt="thumbnail">
        <div class="infos">
          <p class="title">Some Minds</p>
          <p class="artists">Flume Ft.Andrew Wyatt</p>
        </div>
      </div>
      <audio
        src="https://cdns-preview-3.dzcdn.net/stream/c-3fadfb03a63812e921bcf5a16ea2aece-1.mp3"
        controls>
      </audio>
      <div class="action">
        <div class="favorite-action" :class="{ added: true }">
          <font-awesome-icon icon="heart" />
          {{ true ? removeFromFavorites : addToFavorites }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MusicCard',
  data() {
    return {
      addToFavorites: 'Ajouter aux favoris',
      removeFromFavorites: 'Retirer des favoris',
    };
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
