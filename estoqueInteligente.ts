interface produto {
    id: number;
    nome: string;
    quantidade: number;
}

class estoque<T extends produto> {
    private produtos: T[] = [];

    adicionar(produto: T): void {
        const estocado = this.produtos.find(p => p.id === produto.id);
        if (estocado) {
            estocado.quantidade += produto.quantidade;
        } else {
            this.produtos.push(produto);
        }
        console.log('Produto adicionado ao estoque: ${produto.nome} (Qtd: ${produto.quantidade})');
    }

    remover(id: number, quantidade: number): void {
        const produto = this.produtos.find(p => p.id === id);
        if (!produto) {
            console.log('Produto não encontrado.');
            return;
        }

        if (produto.quantidade < quantidade){
            console.log('Quantidade insuficiente de ${produto.nome}.');
            return;
        }

        produto.quantidade -= quantidade;
        console.log('Removido ${quantidade} de ${produto.nome}.');

        if (produto.quantidade === 0) {
            this.produtos = this.produtos.filter(p => p.id !== id);
        }
    }

    listar(): void {
        console.log('Estoque Atual: ');
        this.produtos.forEach(p => {
            console.log('${p.nome} - Qtd: ${p.quantidade}');
        });
    }
}

interface roupa extends produto {
    tamanho: string;
    cor: string;
}

interface caneca extends produto {
    material: string;
    cor: string;
}

interface hardware extends produto {
    marca: string;
    modelo: string;
}


const estoqueCanecas = new estoque<caneca>();
const estoqueHardware = new estoque<hardware>();


estoqueCanecas.adicionar({ id: 1, nome: 'Caneca de Porcelana', quantidade: 50, material: 'Porcelana', cor: 'Branca' });
estoqueHardware.adicionar({ id: 1, nome: 'Placa de Vídeo', quantidade: 5, marca: 'Nvidia', modelo: 'RTX 3080' });

estoqueCanecas.listar();
estoqueHardware.listar();

estoqueCanecas.remover(1, 10);
