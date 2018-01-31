<template>
	<div class="recommend">
		<scroll :data="discList"
						class="recommend-content"
						ref="scroll"
		>
			<div>
				<div v-if="carouselSong.length">
					<levelSroll>
						<div  v-for="item in carouselSong" 
						>
							<a :href="item.linkUrl">
								<img :src="item.picUrl" @load="loadImage" alt="">
							</a>
						</div>
					</levelSroll>
					<div class="hotList">
						<h1 
								class="list-title"
						>热门歌曲列表</h1>
						<ul>
							<li
									v-for="item in discList"
									class="item"
							>
								<div class="icon">
									<img width="60" height="60" v-lazy="item.imgurl" alt="">
								</div>
								<div class="text">
									<h2 class="name" v-html="item.creator.name"></h2>
									<p class="desc" v-html="item.dissname"></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</scroll>
		<loading name="three" v-show="!discList.length"></loading>
	</div>
</template>

<script>
	import { getRecommend, getDiscList } from 'api/recommend'
	import { ERR_OK } from 'api/config'

	import LevelSroll from 'base/levelScroll/levelScroll'
	import Loading from 'base/loading/loading'
	import scroll from 'base/scroll/scroll'

	export default {
		data() {
			return {
				carouselSong: [],
				discList: []
			}
		},
		created() {
			setTimeout(() => {
				this._getDiscList()
			}, 20)
			this._getRecommend()
			
		},
		methods:{
			_getRecommend() {
				getRecommend().then((res) => {
					console.log(res)
					if(res.code === ERR_OK) {
						this.carouselSong = res.data.slider
					}
				})
			},
			_getDiscList() {
				getDiscList().then((res) => {
					console.log(res)
					if(res.code === ERR_OK) {
						this.discList = res.data.list
					}
				})
			},
			loadImage(){
				if(!this.checkloaded) {
					this.checkloaded = true
					this.$refs.scroll.refresh()
				}
			}
		},
		components:{
			LevelSroll,
			scroll,
			Loading
		}
	}
</script>

<style scoped lang="sass" rel="stylesheet/stylus">
	@import "~common/sass/variable"
	
	.recommend
		position: fixed
		width: 100%
		top: 88px
		bottom: 0
		.recommend-content
			height: 100%
			overflow: hidden
			.hotList
				.list-title
					height: 65px
					line-height: 65px
					text-align: center
					font-size: $font-size-medium
				.item
					display: flex
					box-sizing: border-box
					align-items: center
					padding: 0 20px 20px 20px
					.icon
						flex: 0 0 60px
						width: 60px
						padding-right: 20px
					.text
						display: flex
						flex-direction: column
						justify-content: center
						flex: 1
						line-height: 20px
						overflow: hidden
						font-size: $font-size-medium
						.name
							margin-bottom: 10px
							color: $color-text-light
						.desc
							color: $color-text
</style>