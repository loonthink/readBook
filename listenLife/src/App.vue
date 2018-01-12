<template>
  <div id="app" ref="app">
    <m-header></m-header>	
   	<tap></tap>
   	<p>{{bgIndex}}</p>
   	<router-view/>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'

	import MHeader from 'components/m-header/m-header'
	import Tap from 'components/tap/tap'
	export default {
		data() {
			return {
				bgColor: ['red', 'blue', 'pink']
			}
		},
		mounted() {
			const self = this;
			let index = 0
			let timer = setInterval(() => {
				index++
				// self.changeBg(index)
			},20)
		},
		methods: {
			changeBg(index) {
				// let nowIndex = index % 3
				let color = this.bgArray[this.bgIndex]
				this.$refs.app.style['backgroundColor'] = color
			}
		},
		computed: {
			...mapGetters([
				'bgIndex',
				'bgArray'
			])
		},
		watch: {
			bgIndex(newVal) {
				let color = this.bgArray[this.bgIndex]
				this.$refs.app.style['backgroundColor'] = color
			}
		},
	  components: {
	  	MHeader,
	  	Tap
	  }
	}
</script>

<style scoped lang="sass">
  #app
  	width: 100%
  	height: 100%
  	transition: background-color 2s
</style>
