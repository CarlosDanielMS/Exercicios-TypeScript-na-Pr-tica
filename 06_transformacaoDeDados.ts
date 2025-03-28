//função que processa um array de valores
function processarValores(valores: number[], minimo: number): number[] {
    return valores.reduce<number[]>((resultado, valor) => {
        //verifica se o valor é maior que o minimo especificado
        if (valor > minimo){
            const novoValor = valor * (1 + taxa);
            //encontra a posição onde o novo valor deve ser inserido no array ordenado
            let i = resultado.findIndex(v => v < novoValor);
            if (i === -1) resultado.push(novoValor);
            else resultado.splice(i, 0, novoValor);
        }
        return resultado;
    }, []);
}


const valores = [1500, 3000, 500, 200, 3500, 800];
const minimo = 1000;
const taxa = 0.05;

const valoresProcessados = processarValores(valores, minimo, taxa);
console.log(valoresProcessados);
