<template>
	<div class="singer">
		<ul class="singerList">	
			<li v-for="item in singers">
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
	</div>
</template>

<script>
	import {getSinger} from 'api/singer'

	import Singer from 'common/js/singer'

	const HOT_NAME = '热门'
	const HOT_LEN = 10

	export default {
		created() {
			this._getSinger()
		},
		data() {
			return {
				singers:[]
			}
		},
		methods:{
			_getSinger() {
				getSinger().then((res) => {
					this.singers = this._orderSingerlist(res.data.list)
					console.log(this.singers)
				})
			},
			_orderSingerlist(list) {

				console.log(list)
				let map = {
					hot: {
						title: HOT_NAME,
						items: []
					}
				}

				list.forEach((item, index) => {
					if(index < HOT_LEN) {
					 	map.hot.items.push(new Singer({
					 		id: item.Fsinger_mid,
					 		name: item.Fsinger_name
					 	}))
					}

					// 相同的装在一起
					let key = item.Findex
					if(!map[key]) {
						map[key] = {
							title: key,
							items: []
						}
					}

					map[key].items.push(new Singer({
						id: item.Fsinger_mid,
						name: item.Fsinger_name
					}))

				})

				let hotArr = []
				let AToZ = []
				for(let i in map) {
					if(i === "hot") {
						hotArr.push(map[i])
					} else {
						if( (i.toLocaleLowerCase() ).search(/[a-z]/) !== -1 ) {
							AToZ.push(map[i])
						}
					}
				}

				AToZ.sort((a, b) => {
					return a.title.toLocaleLowerCase().charCodeAt(0) - b.title.toLocaleLowerCase().charCodeAt(0)
				})

				return hotArr.concat(AToZ)
			}
		}
	}
</script>

<style lang="sass">
	@import "~common/sass/variable"
	@import "~common/sass/mixin"

	$lineHeightTitle: 20px
	$lineHeightSinD: 60px

	.singer
		height: 100%
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
				&:before
					transform: scale(0)
			.singerImg
				flex: 2
				img
					width: 40px
					border-radius: 50%
					margin-left: 30%
			.singerName
				flex: 6
</style>