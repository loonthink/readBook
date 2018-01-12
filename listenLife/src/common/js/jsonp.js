import originJson from 'jsonp'

export default function jsonp(url, data, options) {
	url += ( url.indexOf('?') > 0 ? '&' : '?' ) + param(data)
	return new Promise((resolve, reject) => {
		return originJson(url, options, (err, data) => {
			if (!err) {
				resolve(data)
			} else {
				reject(err)
			}
		})
	})
}

function param(data) {
	let newParam = '';
	for(let i in data) {
		let value = data[i] !== 'undefined' ? data[i] : ''
		newParam += '&' + i + '=' + encodeURIComponent(value)
	}
	return newParam ? newParam.substring(1) : ''
}