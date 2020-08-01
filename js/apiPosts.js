window.addEventListener('load', () => {
	lista()
})

//Funçao para requisição da api, retorna title e body
function lista(){
	fetch('https://jsonplaceholder.typicode.com/posts').then(resourse => {
		resourse.json().then(data => {
			let newLista = new CriarLista(data)
			newLista.mostrarLista()
		}).catch(error => {
			console.log("Falha na requisição")
		})
	})
}

//Classe que faz o mapeamento da requisição, retornando title e body
class CriarLista{
	constructor(data){
		this.lista = data
	}

	mostrarLista(){
		let itensLista = this.lista.map(res => {
			return {
				title: res.title,
				body: res.body
			}
		})
		
		let elementos = new CriarElementos(itensLista)
		elementos.construirLista()
	}
}

//class que cria os itens da lista e adiciona na View 1 (Dom)
class CriarElementos{
	constructor(data){
		this.listaPostagens = data
		this.postagens = document.querySelector('#postagens')
	}

	construirLista(){
		for(let i = 0; i < this.listaPostagens.length; i++){
			let itemContainer = document.createElement('div')
			let title = document.createElement('h2')
			let body = document.createElement('p')

			title.textContent = this.listaPostagens[i].title
			body.textContent = this.listaPostagens[i].body

			itemContainer.appendChild(title)
			itemContainer.appendChild(body)
			this.postagens.appendChild(itemContainer)

			itemContainer.className = 'intemLista'
		}
		let listaPosts = new ListaPosts()
		listaPosts.motrarItens()
	}
}

//Classe para adicinar valores na view 2 (janela modal)
class ListaPosts{
	constructor(){
		this.itens = document.querySelectorAll('.intemLista') //retorna array de posts
		this.janelaModal = document.querySelector('#post') //seleciona divi modal
		this.container = document.querySelector('#janelaModal')
	}

	motrarItens(){ //metodo para adicionar conteudo na janela modal
		for(let i = 0; i < this.itens.length; i++){
			this.itens[i].addEventListener('click', () => {
				let modalH2 = document.querySelector('#post h2')
				let modalP = document.querySelector('#post p')

				modalH2.textContent = this.itens[i].childNodes[0].textContent
				modalP.textContent = this.itens[i].childNodes[1].textContent

				this.container.style.display = 'block'

				fecharModal(this.container)
			})
		}
	}
}

//função que fecha a janela modal
let fecharModal = (botao) =>{
	let fechar = document.querySelector('#close')
	fechar.addEventListener('click', () => {
		botao.style.display = 'none'
	})
}