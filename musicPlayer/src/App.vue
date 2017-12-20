<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
	  <tap></tap>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tap from 'components/tap/tap'

export default {
  name: 'app',
  components: {
    MHeader,
    Tap
  }
}
</script>

<style>

</style>
