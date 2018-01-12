export function addClass(el, className) {
	if( checkClass(el, className) != -1 ) {
		return 
	}
	el.classList.add('level-item')
} 

export function checkClass(el, className) {
	let allClass = el.className
	const checkClass = `/(${className})/`
	return allClass.search(checkClass)
}