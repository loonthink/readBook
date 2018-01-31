<template>
	<div class="loading">
		<div class="three" v-show="name==='three'">
			<div>
				<p></p>
			</div>
			<div>
				<p></p>
			</div>
			<div>
				<p></p>
			</div>
		</div>
		<!-- 涟漪 -->
		<div class="ripple" v-show="name==='ripple'">
			<div></div>
			<div></div>
			<div></div>
		</div>
		<!-- 三角形 -->
		<div class="triangle" v-show="name=='triangle'">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			name: {
				type: String,
				default: 'three'
			}
		}
	}
</script>

<style scoped lang="sass"> 
	@import '~common/sass/variable'
	@import '~common/sass/mixin'
	
	$three-height: 40px

	.loading
		width: 100%
		height: 100%
		position: fixed
		top: 0
		left: 0
		z-index: $z-index-large
		color: $color-text
		text-align: center
		background: rgba(166, 125, 61,0.4)
		.three
			width: 30%
			height: $three-height
			background: $color-text-light
			margin: 70% auto
			padding: 0 10%
			border-top-left-radius: 50px
			border-bottom-right-radius: 50px
			display: inline-flex
			justify-content: space-around
			align-items: center
			div
				width: 20px
				height: 20px
				&:nth-of-type(1) p
					@include loading-circle(red, 0s)
				&:nth-of-type(2) p
					@include loading-circle(yellow, 0.25s)
				&:nth-of-type(3) p
					@include loading-circle(blue, 0.75s)
		.ripple
			width: 50px
			height: 50px
			border-radius: 50px
			position: fixed
			top: 40%
			left: 40%
			div
				width: 50px
				height: 50px
				background: $color-text
				border-radius: 50px
				position: fixed
				opacity: 0
				&:nth-of-type(1)
					animation: ripple 1s linear 0s infinite 
				&:nth-of-type(2)
					animation: ripple 1s linear 0.2s infinite
				&:nth-of-type(3)
					animation: ripple 1s linear 0.4s infinite
		.triangle 
			width: 100px
			height: 100px
			position: fixed
			top: 40%
			left: 50%
			div
				width: 10px
				height: 10px
				border: 1px solid $color-text
				border-radius: 50px
				position: fixed
				&:nth-of-type(1)
					@include animate(triangle1, 0s)
				&:nth-of-type(2)
					transform: translate(-50px, 50px) 
					@include animate(triangle2, 0s)
				&:nth-of-type(3)
					transform: translate(50px, 50px)
					@include animate(triangle3, 0s)
					
	@keyframes zoom
		0% 
			transform: scale(1)
		50%		
			transform: scale(0.5)
		to 
			transform: scale(1.1)	

	@keyframes ripple
		0%
			transform: scale(0)
			opacity: 0
		5%
			opacity: 1
		100%
			transform: scale(1)
			opacity: 0
	
	@keyframes triangle1 
		33%
			transform: translate(50px, 50px)
		66%
			transform: translate(-50px, 50px)
		100%
			transform: translate(0px, 0px)
	
	@keyframes triangle2
		33%
			transform: translate(0px, 0px)
		66%
			transform: translate(50px, 50px)
		100%
			transform: translate(-50px, 50px)
	
	@keyframes triangle3
		33%
			transform: translate(-50px, 50px)
		66%
			transform: translate(0px, 0px)
		100%
			transform: translate(50px, 50px)
</style>