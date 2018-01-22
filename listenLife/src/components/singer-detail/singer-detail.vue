<template>
	<transition name="slide">
		<music-list
			:title="title"
			:headImg="headImg"
		></music-list>
	</transition>
</template>

<script>
	import MusicList from 'components/music-list/music-list'

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
		methods: {
			_getDetail() {
				if(!this.singer.id) {
					this.$router.push('/singer')
				}
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