// função responsável por criar as colunas
function createColumns (n) {

    // definindo uma variável para contagem
    var i = 0
    while (i < n) {

        // crie uma div com class COLUMN e adicione HTML
        const column = document.createElement('div')
        column.setAttribute('class', 'column')
        columnsDiv.appendChild(column)

        // soma uma contagem
        i++
    }
}


// função responsável por criar os valores das alturas
function createHeightValues () {

    // para cada coluna (div) criada
    for (var i = 0; i < columns.length; i++) {

        // gerar um número aleatório entre 1 e 50
        const height = Math.floor(Math.random() * 50) + 1
        
        // adicionar a altura a coluna (div)
        columns[i].style.height = `${height}vh`
        
        // guardar os valores dentro de uma lista
        heightValues.push(height)
    }
}


// função responsável por ordenar as colunas
function sortColumns () {

    // ordenando a lista de valores de altura
    heightValues.sort((a, b) => a - b)

    // adicionando os valores de altura já ordenados nas colunas
    for (let i = 0; i < heightValues.length; i++) {
        columns[i].style.height = `${heightValues[i]}vh`
    }
}


// definindno algumas variáveis
const columnsDiv = document.querySelector('div#columns')
const sortButton = document.querySelector('button#sort')
const generateButton = document.querySelector('button#generate')

// criando as colunas, passando quantas eu quero
createColumns(35)

// definindo outras variáveis depois de ter criado as colunas
const columns = document.querySelectorAll('div.column')
const heightValues = []

// criando as alturas das colunas
createHeightValues()

// quando o botão SORT for clicado, ordene as colunas
sortButton.onclick = () => sortColumns()

// quando o botão GENERATE for clicado, apague todos 
// os valores de altura e crie novos
generateButton.onclick = () => {
    while (heightValues.length) { heightValues.pop() }
    createHeightValues()
}
