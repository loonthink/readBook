<template>
	<div class="musicList">
		<div 
			class="back"
			@click="back"
		>
			<i class="icon-fanhui"></i>
		</div>
		<h1 class="title" v-html="title"></h1>
		<div 
			class="bg-image"
			:style="bgStyle"
		>
			
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			headImg: {
				type: String,
				default: ''
			}
		},
		methods: {
			back() {
				this.$router.back()
			}
		},
		computed: {
			bgStyle() {
				return `background-image:url(${this.headImg})`
			}
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
		z-index: $z-index-musicList
		width: 100%
		height: 100%
		color: #fff
		background-color: $color-background
		.back
			width: 100%
			height: $back-height
			line-height: $back-height
			i
				color: $color-text
				font-size: $font-size
		.title
			@extend .back 
			text-align: center
		.bg-image
			width: 100%
			margin: 0 auto
			height: $img-height
			background-size: cover
</style>