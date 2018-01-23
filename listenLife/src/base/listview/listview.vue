<template>
	<scroll 
		@scroll="scroll"
		:listen-scroll="listenScroll"
		:probe-type="probeType"
		class="listview"
		ref="listview"
		:data="data"
	>
		<ul class="singerList">	
			<li v-for="item in data"
					ref="singerList"
			>
				<p class="singerTitle"
				>{{item.title}}</p>
				<div v-for="singerD in item.items"
							class="singerD"
							@click="selectItem(singerD)"
				>
					<p class="singerImg">
						<img :src="singerD.avatar" alt="">
					</p>
					<p class="singerName">{{singerD.name}}</p>
				</div>
			</li>
		</ul>
		<div class="list-shortcut">
			<ul>
				<li
						v-for="(item, index) in shortcutList"
						:data-index="index"
						:class="currentIndex === index ? 'currentIndex':''"
						@click.stop.prevent="gotoBig(index)"
				>
					{{item}}
				</li>
			</ul>
		</div>
		<div class="fixTitle" ref="fixed" v-show="fixTitle">
			<p>{{fixTitle}}</p>
		</div>
	</scroll>
</template>

<script>
	import Scroll from 'base/scroll/scroll'

	const topHeight = 20

  export default {
  	props: {
  		data: {
  			type:Array,
  			default: [] 
  		}
  	},
  	created() {
  		this.listHeight = []
  		this.listenScroll = true
  		this.probeType = 3
  	},
  	data() {
  		return {
  			scrollY: -1,
  			currentIndex: 0,
  			diff: -1
  		}
  	},
  	methods: {
  		selectItem(item) {
  			this.$emit('select', item)
  		},
  		_caculateHeight() {
  			let singerList = this.$refs.singerList;
  			this.listHeight = []
  			let height = 0
  			// 对应右侧滚动
  			this.listHeight.push(height)
  			singerList.forEach((item, index) => {
  				height = height + item.clientHeight
  				this.listHeight.push(height)
  			})
  		},
  		gotoBig(index) {
  			this.currentIndex = index
  			this._scrollTo(index)
  		},
  		_scrollTo(index) {
  			this.scrollY = -this.listHeight[index]
  			this.$refs.listview.scrollToElement(this.$refs.singerList[index], 0)
  		},
  		scroll(pos) {
  			this.scrollY = pos.y
  		}
  	},
  	computed: {
  		shortcutList() {
  			return this.data.map((item) => {
  				return item.title.substr(0,1)
  			})
  		},
  		fixTitle() {
  			if(this.scrollY > 0) {
  				return ''
  			}

  			return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
  		}
  	},
  	watch: {
  		data() {
  			setTimeout(() => {
  				this._caculateHeight()
  			}, 20)
  		},
  		scrollY(newY) {
  			if(newY > 0) {
  				this.currentIndex = 0
  				return
  			}
  			const listHeight = this.listHeight
  			
  			for (let i=0; i<listHeight.length-1; i++) {

  				if(-newY >= listHeight[i] && -newY < listHeight[i+1]) {
  					this.currentIndex = i
  					this.diff = listHeight[i+1] + newY
  					return
  				}
  			}
  		},
  		diff(newY) {
				let tHeight = (newY > 0 && newY < topHeight) ? (newY - topHeight) : 0
				console.log(tHeight)
				if (this.tHeight === tHeight) {
          return
        }
        this.tHeight = tHeight
				this.$refs.fixed.style['transform'] = `translate3d(0,${tHeight}px,0)`
  		}
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
			@include thinBorder(96%, 5.5%, -8%)
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
		.list-shortcut
			position: fixed
			top: 20%
			right: 0%
			height: auto
			z-index: $z-index-nomal
			font-size: $font-size-medium
			text-align: center
			background: sienna
			padding: 10px 0;
			border-bottom-left-radius: 50px;
			border-bottom-right-radius: 50px;
			border-top-left-radius: 50px;
			border-top-right-radius: 50px;
			li
				padding: 0 1px
				margin: 5px 0
			.currentIndex
				color: $color-text-light
		.fixTitle
			height: 20px
			position: absolute
			top: 0px
			width: 100%
			background-color: sienna
			line-height: 20px;
			font-size: $font-size-medium
</style>