import {commonParams, options} from './config'
import axios from 'axios'
import jsonp from 'common/js/jsonp'

export function getCurrentSong(currentSong) {
	const url = '/api/getSong'

	const data = Object.assign({}, {
		g_tk: 5381,
		loginUin: 0,
		hostUin: 0,
		format: 'json',
		inCharset: 'utf8',
		outCharset: 'utf-8',
		notice: 0,
		platform: 'yqq',
		inCharset:'utf8',
		needNewCode: 0,
		cid: 205361747,
		uin: 0,
		songmid: currentSong.songmid,
		filename: `C400${currentSong.mid}.m4a`,
		guid: 8369714236
	})

	return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}