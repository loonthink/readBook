<template>
	<div class="singer">
		<list-view 
			:data="singers"
			@select="selectSinger"
		></list-view>

		<router-view></router-view>
	</div>
</template>

<script>
  import listView from 'base/listview/listview'

	import {getSinger} from 'api/singer'

	import Singer from 'common/js/singer'

	import {mapMutations} from 'vuex'

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
			selectSinger(singer) {
				this.$router.push({
					path: `/singer/${singer.id}`
				})
				this.setSinger(singer)
			},
			_getSinger() {
				getSinger().then((res) => {
					this.singers = this._orderSingerlist(res.data.list)
				})
			},
			_orderSingerlist(list) {
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
			},
			...mapMutations({
				setSinger: 'SET_SINGER'
			})
		},
		components: {
			listView
		}
	}
</script>

<style lang="sass" scoped>
	.singer
		position: fixed
		top: 88px
		bottom: 0
		width: 100%
</style>