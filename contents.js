var netflixBtnElem = document.querySelector("#netflixBtn")
var watchaBtnElem = document.querySelector("#watchaBtn")
var conListElem = document.querySelector("#conList")
if(netflixBtnElem) {
	netflixBtnElem.addEventListener('click', function() {
		fetch('/boardAjax/netflix')
		.then(function(res) {
			return res.json()
		}).then(function(myJson) {
			conListElem.innerHTML = ''
			myJson.forEach(function (item) {
				conList(item)
			})
		})
	})
}

if(watchaBtnElem) {
	watchaBtnElem.addEventListener('click', function() {
		fetch('/boardAjax/watcha')
		.then(function(res) {
			return res.json()
		}).then(function(myJson) {
			conListElem.innerHTML = ''
			myJson.forEach(function (item) {
				conList(item)
			})
		})
	})
}

function conList(item) {
	var img = document.createElement('div')
	img.innerHTML = `<img src="${item}">`
	conListElem.append(img)
}