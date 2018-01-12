<template>
	<div class="header">
		<p class="name">Pander </p>
		<i class="icon-xiongmao"></i>
		<p class="name"> Music</p>
	</div>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style lang="sass">
	.header
		width: 100%
		height: 40px
		text-align: center
		line-height: 40px
		.icon-xiongmao
			transform: translateY(5px)
		.name 
			display: inline-block
			font-size: 20px
</style>