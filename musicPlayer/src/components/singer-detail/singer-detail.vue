<template>
	<transition name="slide">
		<music-list :songs="songs" 
               :bg-image="bgImage"
               :title="title"></music-list>
	</transition>
</template>

<script>
  import {mapGetters} from 'vuex'

  import MusicList from 'components/music-list/music-list'

  import {getSingerDetail} from 'api/singer'
  import {createSong} from 'common/js/song'
  import {ERR_OK} from 'api/config'

  export default {
  	computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
  	  ...mapGetters([
        'singer'
  	  ])
  	},
    data() {
      return {
        songs: []
      }
    },
  	created() {
  		this._getSingerDetail()
  	},
  	methods:{
  		_getSingerDetail() {
  			if(!this.singer.id){
  				this.$router.push('/singer');
  				return;
  			}
  			getSingerDetail(this.singer.id).then((res) => {
          if(res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            console.log(this.songs)
          }
  			})
  		},
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if(musicData.songid && musicData.albumid){
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
  	},
    components: {
      MusicList
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