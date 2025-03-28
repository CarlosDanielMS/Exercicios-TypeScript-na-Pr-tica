type Pagamento =
  | { tipo: "cartao"; numero: string; cvv: string }
  | { tipo: "boleto"; codigoBarras: string };

function processarPagamento(pagamento: Pagamento): string {
    if (pagamento.tipo === "cartão"){
        const { numero, cvv } = pagamento;
        return 'Pagamento com cartão!'
    } else if (pagamento.tipo === "boleto") {
        const { codigoBarras } = pagamento;
        return 'Pagamento com Boleto!'
    } else {
        return 'Pagamendo Inválido'
    }
}

const pagamentoCartao: Pagamento = { tipo: "cartão", numero: "1232144214", cvv: "321"};
console.log(processarPagamento(pagamentoCartao));

const pagamentoBoleto: Pagamento = { tipo: "Boleto", numero: "3214124341", cvv: "345"};
console.log(processarPagamento(pagamentoBoleto));
