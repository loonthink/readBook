<template>
	<scroll 
		class="listview"
		:data="data"
	>
		<ul class="singerList">	
			<li v-for="item in data">
				<p class="singerTitle"
				>{{item.title}}</p>
				<div v-for="singerD in item.items"
							class="singerD"
				>
					<p class="singerImg">
						<img :src="singerD.avatar" alt="">
					</p>
					<p class="singerName">{{singerD.name}}</p>
				</div>
			</li>
		</ul>
		<div class="list-shortcut">
			
		</div>
	</scroll>
</template>

<script>
	import Scroll from 'base/scroll/scroll'
  export default {
  	props: {
  		data: null,
  		type: Array
  	},
  	components: {
  		Scroll
  	}
  }
</script>

<style scoped lang="sass">
	@import "~common/sass/variable"
	@import "~common/sass/mixin"

	$lineHeightTitle: 20px
	$lineHeightSinD: 60px
	
	.listview
		position: relative
		width: 100%
		height: 100%
		overflow: hidden
		.singerTitle
			height: $lineHeightTitle
			line-height: $lineHeightTitle
			text-align: left
			margin-left: 5px
			color: $color-text-light
			font-size: $font-size-medium
			@include thinBorder(96%, 5.5%)
		.singerD
			display: flex
			height: $lineHeightSinD
			align-items: center
			@include thinBorder(90%, 9%, 5%)
			&:nth-last-of-type(1)
				&:after
					transform: scale(0)
			.singerImg
				flex: 2
				display: flex
				justify-content: center
				img
					height: 40px
					border-radius: 50%
			.singerName
				flex: 6
</style>