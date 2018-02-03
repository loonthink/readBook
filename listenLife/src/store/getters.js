export const bgIndex = state => state.bgIndex

export const bgArray = state => state.bgArray

export const singer = state => state.singer

export const playlist = state => state.playlist

export const currentIndex = state => state.currentIndex

export const fullScreen = state => state.fullScreen

export const playing = state => state.playing

export const currentSong = (state) => {
	return state.playlist[state.currentIndex] || {}
}