<template>
  <div class="v-navbar">
    <router-link to="/" class="logo">
      <span>Deezweb</span>
    </router-link>
    <router-link to="/">
      <font-awesome-icon icon="home" />Accueil
    </router-link>
    <router-link to="/search">
      <font-awesome-icon icon="search" />Rechercher un titre
    </router-link>
    <router-link to="/favorites">
      <font-awesome-icon icon="heartbeat" />Mes favoris
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
});
</script>

<style lang="scss" scoped>
  .v-navbar {
    padding: 20px 50px;
    background-color: #353A3F;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > a {
      font-weight: bold;
      color: #9B9DA0;
      margin-right: 20px;

      &.logo:hover {
        text-decoration: none;
      }

      > span {
        color: #fff;
        font-size: 1.1em;
      }

      > svg {
        margin-right: 5px;
      }

      &.router-link-exact-active {
        color: #fff;
      }
    }
  }
</style>
