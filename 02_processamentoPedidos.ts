//interface que define o contrato para regras de desconto
interface descontoRegra {
    aplicar(carrinho: carrinho): void;
}

//produtos
type produtos = 'Roupas' | 'Canecas' | 'Hardware';

//classe para representar o carrinho
class itemCarrinho {
    public nome: string;
    public preco: number;
    public categoria: produtos;

    //metodo construtor
    constructor(nome: string, preco: number, categoria: produtos) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
}

//classe carrinho para adicionar e realizar os descontos
class carrinho {
    private itens: itemCarrinho[] = [];
    private regras: descontoRegra[] = [];
    private totalDeDesconto: number = 0;

    addItem(item: itemCarrinho): void {
        this.itens.push(item);
    }

    addRegraDeDesconto(regra: descontoRegra): void {
        this.regras.push(regra);
    }

    applyDesconto(desconto: number): void {
            this.totalDeDesconto = 0;
            this.regras.forEach(regra => regra.aplicar(this));
        }

    getTotal(): number {
        const total = this.itens.reduce((soma, item) => soma + item.preco, 0);
        return total - this.totalDeDesconto;
    }

    getItems(): itemCarrinho[] {
        return this.itens;
    }
}

//regra de desconto
class descontoPorCategoria implements descontoRegra {
    aplicar(carrinho: carrinho): void {
        const desconto = carrinho.getItems()
            .filter(item => item.categoria === 'Roupas')
            .reduce((sum, item) => sum + item.preco, 0) * 0.1;
        carrinho.applyDesconto(desconto);
    }
}

class descontoSazonais implements descontoRegra {
    aplicar(carrinho: carrinho): void {
        const desconto = carrinho.getItems()
            .reduce((sum, item) => sum + item.preco, 0) * 0.05;
        carrinho.applyDesconto(desconto);
    }
}

const carrinhoDeCompras = new carrinho();
carrinhoDeCompras.addItem(new itemCarrinho('Camiseta polo', 50, 'Roupas'));
carrinhoDeCompras.addItem(new itemCarrinho('Caneca de café', 10, 'Canecas'));
carrinhoDeCompras.addItem(new itemCarrinho('Placa de vídeo', 1500, 'Hardware'));

carrinhoDeCompras.addRegraDeDesconto(new descontoPorCategoria('Roupas', 10));
carrinhoDeCompras.addRegraDeDesconto(new descontoSazonais());


console.log("Total de compras com desconto: $", carrinhoDeCompras.getTotal());
