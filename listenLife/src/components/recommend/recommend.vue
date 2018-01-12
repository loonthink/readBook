<template>
	<div class="singer">
		<div v-if="carouselSong.length">
			<levelSroll>
				<div  v-for="item in carouselSong" 
				>
					<a :href="item.linkUrl">
						<img :src="item.picUrl" alt="">
					</a>
				</div>
			</levelSroll>
		</div>
	</div>
</template>

<script>
	import { getRecommend } from 'api/recommend'
	import { ERR_OK } from 'api/config'

	import LevelSroll from 'base/levelScroll'

	export default {
		data() {
			return {
				carouselSong:[]
			}
		},
		created() {
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
			}
		},
		components:{
			LevelSroll
		}
	}
</script>

<style lang="sass">

</style>