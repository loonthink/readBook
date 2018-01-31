<template>
  <div id="app" ref="app">
    <m-header></m-header>
   	<tap></tap>
   	<keep-alive>
   		<router-view/>
   	</keep-alive>
   	<player></player>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'

	import MHeader from 'components/m-header/m-header'
	import Tap from 'components/tap/tap'
	import Player from 'components/player/player'

	export default {
		computed: {
			...mapGetters([
				'bgIndex',
				'bgArray'
			])
		},
		watch: {
			bgIndex(newVal) {
				let color = this.bgArray[this.bgIndex]
				// this.$refs.app.style['backgroundColor'] = color
			}
		},
	  components: {
	  	MHeader,
	  	Tap,
	  	Player
	  }
	}
</script>

<style scoped lang="sass">
  #app
  	width: 100%
  	height: 100%
  	transition: background-color 2s
</style>
