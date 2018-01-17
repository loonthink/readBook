<template>
	<div class="scroll" ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>	
  import BScroll from 'better-scroll'

	export default {
		props: {
			data: {
				type: Array,
				default: null
			},
			refreshDelay: {
				type: Number,
				default: 20
			}
		},
		mounted() {
			setTimeout(() => {
				this._initScroll()
			})
		},
		methods: {
			_initScroll() {
				if (!this.$refs.wrapper) {
					return
				}
				this.scroll = new BScroll(
					this.$refs.wrapper, {

					}
				)
			},
			refresh() {
				this.scroll && this.scroll.refresh()
			}
		},
		watch: {
			data() {
				setTimeout(() => {
					this.refresh()
				}, this.refreshDelay)
			}
		}
	}
</script>

<style lang="sass" scoped>
	
</style>