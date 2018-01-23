<template>
	<transition name="slide">
		<music-list
			:title="title"
			:headImg="headImg"
			:songs="songs"
		></music-list>
	</transition>
</template>

<script>
	import MusicList from 'components/music-list/music-list'

	import {ERR_OK} from 'api/config'
	import {getSingerDetail} from 'api/singer'
	import {createSong} from 'common/js/song'

	import {mapGetters} from 'vuex'

	export default {
		computed: {
			title() {
				return this.singer.name
			},
			headImg() {
				return this.singer.avatar
			},
			...mapGetters([
				'singer'
			])
		},
		created() {
			this._getDetail()
		},
		data() {
			return {
				songs: []
			}
		},
		methods: {
			_getDetail() {
				if(!this.singer.id) {
					this.$router.push('/singer')
				}
				getSingerDetail(this.singer.id).then((res) => {
					if (res.code === ERR_OK) {
						this.songs = this._handelSongs(res.data.list)
						console.log(this.songs)
					}
				})
			},
			_handelSongs(list) {
				let nowList = []
				list.forEach((item) => {
					nowList.push(createSong(item.musicData))
				})
				return nowList
			}
		},
		components: {
			MusicList
		}
	}
</script>

<style scoped lang="sass">
	.slide-enter-active, .slide-leave-active
		transition: all 0.3s
	.slide-enter, .slide-leave-to
		transform: translate3d(100%, 0, 0) 
</style>