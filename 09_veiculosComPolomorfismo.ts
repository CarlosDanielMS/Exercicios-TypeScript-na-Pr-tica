abstract class veiculo {
    abstract calcularCusto(distancia: number): number;
}

class Carro extends veiculo {
    calcularCusto(distancia: number): number {
        const Km = 2;
        return distancia * Km;
    }
}

class moto extends veiculo {
    calcularCusto(distancia: number): number {
        const Km = 1;
        return distancia * Km;
    }
}

class caminhao extends veiculo {
    calcularCusto(distancia: number): number {
        const Km = 5;
        return distancia * Km;
    }
}

function calcularFrete(veiculo: veiculo, distancia: number): number {
    return veiculo.calcularCusto(distancia);
}

const carro = new Carro();
const moto = new moto();
const caminhao = new caminhao();

const distancia = 200;

console.log("Custo com Carro: ", calcularFrete(carro, distancia));
console.log("Custo com moto: ", calcularFrete(moto, distancia));
console.log("Custo com caminhao: ", calcularFrete(caminhao, distancia));
