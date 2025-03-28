interface usuario {
    email: string;
    senha: string;  
}

class sistemaDeLogin {
    acessarRecursoProtegido() {
        throw new Error("Method not implemented.");
    }
    private usuarios: usuario[] = [{ email: "alunoDaniel@gmail.com", senha: "1234" }];
    private usuarioOn: usuario | null = null;

    public autenticar(email: string, senha: string): boolean {
        const usuario = this.usuarios.find(u => u.email === email && u.senha === senha);
        if (usuario) {
            this.usuarioOn = usuario;
            console.log("Login realizado com sucesso!");
            return true;
        } else {
            console.log("Login inválidas!");
            return false;
        }
    }

    public vereficarAutenticacao(): boolean {
        return this.usuarioOn !== null;
    }

    public acessarLogin(): void {
        if (this.vereficarAutenticacao()) {
            console.log("Acesso concedido!");
        } else {
            console.log("Acesso negado");
        }
    }
}

const sistemaDeLoginInstance = new sistemaDeLogin();

sistemaDeLoginInstance.autenticar("alunoDaniel@gmail.com", "1234");

sistemaDeLoginInstance.acessarRecursoProtegido();

