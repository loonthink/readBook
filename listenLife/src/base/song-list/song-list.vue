<template>
	<div class="songList">
		<ul>
			<li 
				v-for="song in songs"
				class="item"
			>
				<div 
					class="content"
				>
					<h2 
						class="songName"
					>
						<i class="icon-yinle"></i>
						{{song.name}}
					</h2>
					<p
						class="songDesc"
					>
						<i class="icon-morengeshoutu"></i> 
						{{getDesc(song)}}
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			songs: {
				type: Array,
				default: []
			}
		},
		methods: {
			getDesc(song) {
				return `${song.name}.${song.album}`
			}
		}
	}
</script>

<style scoped lang="sass">
	@import '~common/sass/variable'
	@import '~common/sass/mixin'

	$item-height: 60px
	$song-desc: 10px
	.songList
		.item
			display: flex
			height: $item-height
			align-items: center
			@include thinBorder(90%, 8%, 5%)
			.content
				flex: 1
				@include ellipsis()
				width: 80%
				padding: 0 6%
				color: $color-text
				.songName
					@include ellipsis()
					font-size: $font-size-medium-x
				.songDesc
					@include ellipsis()
					margin-top: $song-desc
					font-size: $font-size-medium-x
</style>