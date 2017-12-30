import {playMode} from 'common/js/config'

//仓库
const state = {
	singer: {},
	playing: false,
	fullScreen: [],
	playlist: [],
	sequenceList: [],
	mode: playMode.sequence,
	currentIndex: -1,
	disc:{}
}

export default state