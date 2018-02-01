<template>
	<div class="player" v-show="playlist.length > 0">
		<!-- <p v-html="currentSong" @click="getSong"></p> -->
    <transition name="normal" @enter="enter">
      <div class="normal-player" v-show="fullScreen">
        <div 
          class="background"
        > 
          <img :src="currentSong.image" alt="">
        </div>
        <div class="top">
          <div class="back" 
            @click="showMini(false)"
          >
            <i class="icon-xiangxia"></i>
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
            <div class="cd-wrapper" ref="cdWrapper">
              <div class="cd">
                <img :src="currentSong.image" alt="" class="image">
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div>
            <i class="icon-suijibofang"></i>
          </div>
          <div>
            <i class="icon-shangyishou"></i>
          </div>
          <div>
            <i class="icon-bofang"></i>
          </div>
          <div>
            <i class="icon-xiayishou"></i>
          </div>
          <div>
            <i class="icon-shoucang"></i>
          </div>
        </div>
      </div>
    </transition>
    <transition name="mini" @enter="enter">  
      <div class="mini-player" 
        v-show="!fullScreen"
        @click="showMini(true)"
      >
        <div class="miniImg">
          <img :src="currentSong.image" alt="" class="image">
        </div>
        <div>
          <i class="icon-shangyishou"></i>
        </div>
        <div>
          <i class="icon-bofang"></i>
        </div>
        <div>
          <i class="icon-xiayishou"></i>
        </div>
      </div>
    </transition>
	</div>
</template> 

<script>
  import {mapGetters, mapMutations} from "vuex"

  import {getCurrentSong} from 'api/song'

  import animations from 'create-keyframe-animation'
  
  export default {
  	data() {
  		return {
  			currentSongUrl:''
  		}
  	},
  	methods: {
      enter(el, done) {
        let animation = {
          0: {
            transform: `translate3d(-100px,370px,0) scale(0)`
          },
          60: {
            transform: `translate3d(0,0,0) scale(1.1)`
          },
          100: {
            transform: `translate3d(0,0,0) scale(1)`
          } 
        }

        animations.registerAnimation({
            name: 'move',
            animation,
            presets: {
              duration: 400,
              easing: 'linear'
            }
          })

          animations.runAnimation(this.$refs.cdWrapper, 'move', done)
      },
      showMini(flag) {
        this.setFullScreen(flag)
      },
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
      ...mapMutations({
        "setFullScreen":"SET_FULL_SCREEN"
      })
  	},
  	computed: {
  		...mapGetters([
  			'playlist',
  			'currentSong',
        'fullScreen'
  		])
  	}
  }
</script>

<style scoped lang="sass">
  @import '~common/sass/variable' 

  $height-song-name: 40px
  $height-singer-name: 20px
  $bottom-bottom: 20px
  $height-bottom: 40px
  $height-miniPlayer: 5px

  .player
    .normal-enter-active, .normal-leave-active
      transition: all 0.4s
      .top, .bottom, 
        transition: all 0.4s ease-in-out
      .middle 
    .normal-enter, .normal-leave-to   
      opacity: 0
      .top
        transform: translate3d(0, -100px, 0)
      .bottom
        transform: translate3d(0, 100px, 0)
      .middle
        animation: show 0.4s linear
    .normal-player
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
          position: relative
          z-index: $z-index-large
          .icon-fanhui
            font-size: 20px
        .songName
          text-align: center
          width: 100%
          height: $height-song-name
          line-height: $height-song-name
          position: absolute
          top: 0px
          font-size: $font-size-large
        .singerName 
          @extend .songName
          height: $height-singer-name
          line-height: $height-singer-name
          position: inherit
          font-size: $font-size-small
      .middle
        position: fixed
        width: 100%
        top: 72px
        bottom: 289px
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
      .bottom
        width: 100%
        height: $height-bottom
        position: fixed
        bottom: $bottom-bottom
        display: flex
        justify-content: space-around
        align-items: center
        div
          i
            font-size: 35px
            &.icon-bofang
              font-size: 45px
    .mini-player
      width: 100%
      height: $height-bottom
      position: fixed
      bottom: $height-miniPlayer
      display: flex
      justify-content: space-around
      align-items: center
      background-color: $color-background
      div
        flex: 1
        i
          font-size: 30px
          &.icon-bofang
            font-size: 45px
      .miniImg
        flex: 3
        display: flex
        justify-content: center
        img
          height: 50px
          border-radius: 50%
    .mini-enter-active, .mini-leave-active  
      transition: all 0.4s
    .mini-enter, .mini-leave-to
      opacity: 0
  @keyframes noShow
    0%
      transform: translate3d(-100px,370px,0) scale(0)
    100%
      transform: translate3d(0,0,0) scale(1) 
  @keyframes show
    0%
      transform: translate3d(0,0,0) scale(1)
    100% 
      transform: translate3d(-120px,370px,0) scale(0)
</style>