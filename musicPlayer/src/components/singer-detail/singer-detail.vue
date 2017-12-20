<template>
	<transition name="slide">
		<div class="singer-detail">{{`I am ${singer.name}`}}</div>
	</transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
  	computed: {
  	  ...mapGetters([
        'singer'
  	  ])
  	},
  	created() {
  		console.log(this.singer)
  	}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"

	.singer-detail
	  width:100%
	  height:100%
	  position: fixed
	  z-index: 100
	  left: 0
	  right: 0
	  bottom: 0
	  background: $color-background
	.slide-enter-active, .slide-leave-active
	  transition: all 0.3s
	.slide-enter, .slide-leave-to
	  transform: translate3d(100%, 0, 0)	
</style>