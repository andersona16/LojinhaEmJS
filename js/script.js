class Produto {
    constructor() {
        this.id = 0;
        this.nomeProduto = '';
        this.valor = 0;
    }

    adicionar() {
        console.log('ADicionado')
        // ..
    }

    excluir() {
        console.log('Deletado')
    }
}

var produto = new Produto();