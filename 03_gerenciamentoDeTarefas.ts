// enum usado para criar um conjunto de valores nomeados.
enum tarefaStatus {
    pendente = "pendente",
    fazendo = "fazendo",
    concluida = "concluida"
}

//uma interface tarefas que é atribuido alguns atributos para ter um controle
interface tarefas {
    id: number;
    titulo: string;
    status: tarefaStatus;
}

//uma classe para gerenciar as tarefas armazenando
class GerenciamentoDeTarefas {
    private tarefas: tarefas[] = [];
    private proximoId = 1;

    adicionarTarefa(titulo: string): void {
        const novaTarefa: tarefas = {id: this.proximoId++, titulo, status: tarefaStatus.pendente};
        this.tarefas.push(novaTarefa);
        console.log(`Tarefa criada: ${novaTarefa.titulo} ${novaTarefa.id}`);
    }

    updateTarefaStatus(id: number, novoStatus: tarefaStatus): void {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.status = novoStatus;
            console.log('Status da tarefa "${tarefa.titulo}" alterado para: ${tarefa.status}');
        } else {
            console.log('tarefa com não encontrada');
        }
    }

    listarTarefasPorStatus(status: tarefaStatus): tarefas[] {
        return this.tarefas.filter(tarefa => tarefa.status === status);
    }
    
    contadorTarefas(): number {
        return this.tarefas.filter(tarefas => tarefas.status === tarefaStatus.concluida).length;
    }
}

const gerenciadorTarefas = new GerenciamentoDeTarefas();

gerenciadorTarefas.adicionarTarefa('Treino de jiu-jitsu');
gerenciadorTarefas.adicionarTarefa('Estudar pra prova de dev1');
gerenciadorTarefas.adicionarTarefa('Comprar picanha no mercado');

console.log(gerenciadorTarefas.contadorTarefas());
