//interface cliente que é a estrutura de um objeto cliente
interface cliente {
    nome: string;
    cpf: string;
    rendaMensal: number;
}

//função que valida um objeto para ele obedecer à estrutura pela interface
function validarCliente(json: any): cliente {
    if (!json || typeof json !== 'object') {
        throw new Error("Não é válido.");
    }

    const { nome, cpf, rendaMensal } = json;

    if (typeof nome !== 'string') {
        throw new Error("Nome deve ser uma string.");
    }

    if (typeof cpf !== 'string') {
        throw new Error("Cpf deve ser uma string.");
    }

    if (typeof rendaMensal !== 'number') {
        throw new Error("Renda mensal deve ser um número.");
    }

    return { nome, cpf, rendaMensal };
}

//try-catch para testar a função validarCliente e imprimir erros
try {
    const cliente = validarCliente({
        nome: "Carlos Daniel",
        cpf: "451.354.864-65",
        rendaMensal: 3000.50
    });
    console.log("Cliente válido:", cliente);
} catch (error) {
    console.error(error instanceof Error ? error.message : error);
}
