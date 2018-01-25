export const bgIndex = state => state.bgIndex

export const bgArray = state => state.bgArray

export const singer = state => state.singer

export const playlist = state => state.playlist

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
	return state.playlist[state.currentIndex] || {}
}