<template>
	<div class="player" v-show="playlist.length > 0">
		<!-- <p v-html="currentSong" @click="getSong"></p> -->
    <div 
      class="background"
    >
      <img :src="currentSong.image" alt="">
    </div>
    <div class="top">
      <div class="back">
        <i class="icon-fanhui"></i>
      </div>
      <h1 
        class="songName"
        v-html="currentSong.name"></h1>
      <h2 
        class="singerName"
        v-html="currentSong.singer"></h2>
    </div>
    <div class="middle">
      <div class="middle-l">
        <div class="cd-wrapper">
          <div class="cd">
            <img :src="currentSong.image" alt="" class="image">
          </div>
        </div>
      </div>
    </div>
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
	  			this.currentSongUrl = this._getCurrentSong(res.data.items[0])
          console.log(this.currentSongUrl)
	  		})
  		},
  		_getCurrentSong(list) {
        var name = encodeURIComponent(list.filename)
            console.log(name)
        var vkey = encodeURIComponent(list.vkey)
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

  $height-song-name: 40px;
  $height-singer-name: 20px

  .player
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: $color-background
    color: $color-text
    .background
      width: 100%
      height: 100%
      position: absolute
      left: 0
      top: 0
      z-index: -1
      opacity: 0.6
      filter: blur(20px)
      img
        width: 100%
        height: 100%
    .top
      margin-bottom: 20px
      .back
        margin: 10px
        .icon-fanhui
          font-size: 20px
      .songName
        text-align: center
        width: 100%
        height: $height-song-name
        line-height: $height-song-name
      .singerName 
        @extend .songName
        height: $height-singer-name
        line-height: $height-singer-name
    .middle
      position: fixed
      width: 100%
      top: 120px
      bottom: 170px
      white-space: nowrap
      font-size: 0
      .middle-l
        display: inline-block
        vertical-align: top
        position: relative
        width: 100%
        height: 0
        padding-top: 80%
        .cd-wrapper
          position: absolute
          left: 10%
          top: 0
          width: 80%
          height: 100%
          .cd 
            width: 100%
            height: 100%
            box-sizing: border-box
            border: 10px solid rgba(255,255,255,0.1)
            border-radius: 50%
            .image
              width: 100%
              height: 100%
              border-radius: 50%
</style>