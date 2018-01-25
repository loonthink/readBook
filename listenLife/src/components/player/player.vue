<template>
	<div class="player" v-show="playlist.length > 0">
		<p v-html="currentSong" @click="getSong"></p>
	</div>
</template>

<script>
  import {mapGetters} from "vuex"

  import {getCurrentSong} from 'api/song'

  export default {
  	data() {
  		return {
  			currentSongUrl:''
  		}
  	},
  	methods: {
  		getSong() {
  			getCurrentSong(this.currentSong).then((res) => {
  				console.log('999')
	  			this.currentSongUrl = this._getCurrentSong(res.data.items[0])
          console.log(this.currentSongUrl)
	  		})
  		},
  		_getCurrentSong(list) {
        var name = encodeURIComponent(list.filename)
            console.log(name)
        var vkey = encodeURIComponent(list.vkey)
  			console.log(`http://dl.stream.qqmusic.qq.com/C400001E4izU2lvYQx.m4a?vkey=FC56264DAA5F3EDD9463FA06EDC07D3FEF757A45A895098B728769C6BA0173A41D4C63019B48A21D32C19F927405C3F97517BFEA739B4556&guid=8369714236&uin=0&fromtag=66`)
			return `http://dl.stream.qqmusic.qq.com/${name}?vkey=${vkey}&guid=8369714236&uin=0&fromtag=66`
	  	},
  	},
  	computed: {
  		...mapGetters([
  			'playlist',
  			'currentSong'
  		])
  	}
  }
</script>

<style scoped lang="sass">
	@import '~common/sass/variable'

	.player
		width: 100%
		height: 100%
		position: fixed
		top: 0
		left: 0
		background: $color-background
		color: $color-text-light
</style>