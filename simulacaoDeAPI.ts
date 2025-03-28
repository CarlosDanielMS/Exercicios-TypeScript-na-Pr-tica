async function dinheiro(moeda: string): Promise<{ moeda: string; valor: number }> {
    return new Promise((resolve, reject) => {
        const tempo = Math.random() * 3000 + 1000;
        
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Falha na conexão"));
                return;
            }

            const valor = parseFloat((Math.random() * (6 - 4) + 4).toFixed(2));
            resolve({ moeda, valor });
        }, tempo);
    });
}

async function chamarApi(){
    try {
        const crypto = await dinheiro("BTC");
        console.log('Moeda ${crypto.moeda}: R$ ${crypto.valor}');
    } catch (error) {
        console.error('Erro ao obter a crypto:', (error as Error).message);
    }
}

chamarApi();
