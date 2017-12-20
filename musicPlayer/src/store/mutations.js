//修改数据到前段仓库

import * as types from './mutation-types'

const mutations = {
	[types.SET_SINGER](state, singer) {
		state.singer = singer
	}
}

export default mutations