<template>
	<div class="musicList">
		<div 
			class="back"
			@click="back"
		>
			<i class="icon-fanhui"></i>
			<h1 class="title" v-html="title"></h1>
		</div>
		<div 
				class="bg-image"
				:style="bgStyle"
				ref="bgImage"
			>
			<div class="filter" ref="filter"></div>
		</div>
		<div class="bg-layer" ref="layer"></div>
		<scroll 
			:data="songs"
			class="list"
			:listen-scroll="listenScroll"
			@scroll="scroll"
			:probe-type="probeType"
			ref="scroll"
		>
			<song-list 
				:songs="songs"
				@select="selectSong"
			></song-list>
		</scroll>
	</div>
</template>

<script>
  import SongList from 'base/song-list/song-list'
  import Scroll from 'base/scroll/scroll' 

  import {mapActions} from 'vuex'

  const RESERVED_HEIGHT = 40

	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			headImg: {
				type: String,
				default: ''
			},
			songs: {
				type: Array,
				default: null
			}
		},
		created() {
			this.probeType = 3
			this.listenScroll = true
		},
		mounted() {
			this.imageHeight = this.$refs.bgImage.clientHeight
			this.mitranslateY = -this.imageHeight + RESERVED_HEIGHT
			this.$refs.scroll.$el.style.top=`${this.imageHeight+30}px`
		},
		data() {
			return {
				scrollY: 0
			}
		},
		methods: {
			back() {
				this.$router.back()
			},
			scroll(pos) {
				this.scrollY = pos.y
			},
			selectSong(song,index) {
				console.log( this.songs , index )
				this.selectPlay({
					list: this.songs,
					index
				})
			},
			...mapActions([
				'selectPlay',
			])
		},
		watch: {
			scrollY(newY) {
				let traslateY = Math.max(this.mitranslateY, newY)
				console.log(traslateY)
				let zIndex = 0;
				let scale = 1
				this.$refs.layer.style['transform']=`translate3d(0,${traslateY}px,0)`

				const percent = Math.abs(newY / this.imageHeight)
				if(newY > 0) {
					scale = 1 +  percent
					zIndex = 10
				}

				if(newY < this.mitranslateY) {
					zIndex = 10
					this.$refs.bgImage.style.height=`${RESERVED_HEIGHT}px`
					this.$refs.bgImage.style.paddingTop=0
				} else {
					this.$refs.bgImage.style.height = 0
					this.$refs.bgImage.style.paddingTop='70%'
				}

				this.$refs.bgImage.style.zIndex=`${zIndex}`
				this.$refs.bgImage.style['transform']=`scale(${scale})`
			}
		},
		computed: {
			bgStyle() {
				return `background-image:url(${this.headImg})`
			}
		},
		components: {
			SongList,
			Scroll
		}
	}
</script>

<style scoped lang="sass">
	@import '~common/sass/variable' 
	
	$back-height: 30px
	$font-size: 20px
	
	$img-height: 300px

	.musicList
		position: fixed
		top: 0px
		left: 0
		bottom: 0
		right: 0
		z-index: $z-index-nomal-fir
		width: 100%
		height: 100%
		color: #fff
		background-color: $color-background
		.back
			position: relative
			top: 0
			z-index: $z-index-large
			width: 100%
			height: $back-height
			line-height: $back-height
			background: $color-background
			i
				color: $color-text
				font-size: $font-size-medium
			.title
				@extend .back 
				@extend i
				width: 90%
				float: right
				display: inline-block
				font-size: $font-size-small-s		    
		.bg-image
			position: relative
			width: 100%
			height: 0
			padding-top: 70%
			background-size: cover
			transform-origin: 50% 0
			.filter
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 100%
				background: rgba(7, 17, 27, 0.4)
		.bg-layer
			position: relative
			height: 100%
			background: $color-background
		.list
			position: fixed
			top: 0
			bottom: 0
			width: 100%
			background: $color-background
</style>