<template>
	<div class="tap">
		<router-link tag="div" class="tab-item" to="/recommend">
			<i class="icon-tuijian"></i>
			<span class="tab-link">A</span>
		</router-link>
		<router-link tag="div" class="tab-item" to="/singer">
			<i class="icon-morengeshoutu"></i>
			<span class="tab-link"></span>
		</router-link>
		<router-link tag="div" class="tab-item" to="/rank">
			<i class="icon-paihang"></i>
			<span class="tab-link"></span>
		</router-link>
		<router-link tag="div" class="tab-item" to="/search">
			<i class="icon-icon-search-cancel"></i>
			<span class="tab-link"></span>
		</router-link>
	</div>
</template>

<script>

</script>

<style scoped lang="sass"> 
	@import "~common/sass/variable"
	.tap
		display: flex
		height: 44px
		line-height: 44px
		font-size: $font-size-large
		.tab-item
			flex: 1
			text-align: center
			i 
				font-size: $font-size-large
		.router-link-active
			color: $color-light
			border-bottom: 2px solid $color-light
</style>