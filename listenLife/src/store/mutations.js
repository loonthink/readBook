import * as types from './mutation-types'

const mutations = {
	[types.SET_BGINDEX](state, bgIndex) {
		state.bgIndex = bgIndex
	}
}

export default mutations