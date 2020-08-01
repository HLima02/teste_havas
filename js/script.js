// window.addEventListener('load', () => {
// 	// let listaPosts = new ListaPosts()
// 	// listaPosts.motrarItens()
// 	teste()
// })

class ListaPosts{
	constructor(){
		this.itens = document.querySelectorAll('.intemLista')
	}

	motrarItens(){
		console.log(this.itens)
	}
}

function teste(){
	let testeItem = document.querySelectorAll('.intemLista')
	console.log(testeItem)
}

teste()