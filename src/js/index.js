/* 
  O que precisamos fazer? - quando clicar no botão do modelo na lista, temos que marcar o botão como selecionado e mostrar o modelo correspondente

    OBJETIVO 1 - quando clicar no botão do modelo na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do modelo mostrar as informações do modelo
        passo 1 - pegar os modelos no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no modelo que o usuário selecionou
        passo 3 - verificar se já existe um modelo selecionado, se sim, devemos remover a seleção dele 
*/

const botoes = document.querySelectorAll(".botao");
const modelos = document.querySelectorAll(".modelo");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarmodelo();

		botao.classList.add("selecionado");
		modelos[indice].classList.add("selecionado");
	});
});

function desselecionarmodelo() {
	const modeloSelecionado = document.querySelector(".modelo.selecionado");
	modeloSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
