<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
	  <tap></tap>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Player from 'components/player/player'
import Tap from 'components/tap/tap'

export default {
  name: 'app',
  components: {
    MHeader,
    Tap,
    Player
  }
}
</script>

<style>

</style>
