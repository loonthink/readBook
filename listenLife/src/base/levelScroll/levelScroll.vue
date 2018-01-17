<template>
	<div class="level-outer" ref="levelOuter">
		<div class="level-body" ref="levelBody">
			<slot></slot>
		</div>
		<div class="dots">
			<span class="dot"
						v-for="(item, index) in dots"
						:class="{active: currentPageIndex === index }"
						@click="goPicurl(index)"
			></span>
		</div>
	</div>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex'

	import BScroll from 'better-scroll'
	import {addClass} from 'common/js/dom'
	export default {
		name: 'lelvelScroll',
		props: {
			loop: {
				type: Boolean,
				default: true
			},
			autoPlay: {
				type: Boolean,
				default: true
			},
			interval: {
				type: Number,
				default: 4000
			}
		},
		data() {
			return {
				dots: [],
				currentPageIndex: 0
			}
		},
		mounted() {
			setTimeout(() => {
				this.reSetOuterWidth()
				this._initDots()
				this.initSlider()
				if (this.autoPlay) {
					this._play()
				}
			}, 20)
		},
		activated() {
			if (this.autoPlay) {
				this._play()
			}
		},
		deactivated() {
			clearTimeout(this.timer)
		},
		beforeDestroy() {
			clearTimeout(this.timer)
		},
		methods: {
			reSetOuterWidth() {
				this.children = this.$refs.levelBody.children
				let _width = 0
				let _clientWidth = this.$refs.levelOuter.clientWidth
				Array.from(this.children).forEach((item, index) => {
					item.style.width = _clientWidth + 'px'
					addClass(item, 'level-item')
					_width += _clientWidth
				})
				if (this.loop) {
					_width += 2 * _clientWidth
				}	
				this.$refs.levelBody.style.width= _width + 'px'
			},
			initSlider() {
				this.levelScroll = new BScroll(
					this.$refs.levelOuter, {
						scrollX: true,
						scrollY: false,
						momentum: false,
						snap: true,
						snapLoop: this.loop,
						snapThreshold: 0.3,
						snapSpeed: 400
					}
				)
				this.levelScroll.on('scrollEnd', () => {
					//pageX 获取到的是不是索引是位置
					let pageIndex = this.levelScroll.getCurrentPage().pageX - 1
					console.log('aaa')
					this.currentPageIndex = pageIndex

					if(this.autoPlay) {
						this._play()
					}
				})

				this.levelScroll.on('beforeScrollStart', () => {
					if(this.autoPlay) {
						clearTimeout(this.timer)
					}
				})
			},
			_initDots() {
				this.dots = new Array(this.children.length)
			},
			_play() {
				let pageIndex = this.currentPageIndex + 2
				this.SET_BGINDEX(this.currentPageIndex)
				this.timer = setTimeout(() => {
					this.levelScroll.goToPage(pageIndex, 0, 400)
				}, this.interval)
			},
			goPicurl(index) {
				clearTimeout(this.timer)
				let pageIndex = index + 1
				this.currentPageIndex = index
				this.levelScroll.goToPage(pageIndex, 0, 400)
				if(this.autoPlay) {
					this._play()
				}
			},
			...mapMutations([
				'SET_BGINDEX'
			])
		},
		computed: {
			...mapGetters([
				'bgIndex'
			])
		}
	}
</script>

<style scoped lang="sass"> 
	@import '~common/sass/variable'
	.level-outer
		min-height: 1px
		overflow: hidden
		position: relative
		.level-body
			overflow: hidden
			white-space: nowrap
			.level-item
				float: left
				a
					display: block
					width: 100%
					height: 100%
				img
					display: block
					width: 100%
		.dots
			position: absolute
			right: 0
			left: 0
			bottom: 12px
			text-align: center
			font-size: 0
			.dot
				width: 8px
				height: 8px
				border-radius: 50%
				display: inline-block
				margin: 0 4px
				background: $color-text
				&.active
					width: 20px
</style>