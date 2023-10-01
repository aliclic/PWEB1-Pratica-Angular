import { Component } from '@angular/core';
import { AnimalEstimacao } from './shared/model/animal-estimacao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PWEB1-Pratica-AnimalDeEstimacao';
  animais: AnimalEstimacao[] = [];
  animalTratamento: AnimalEstimacao;
  animaisPesquisa: Array<AnimalEstimacao> = [];
  mensagemErro: string = '';
  mostrarFormularioEdicao: boolean = false;
  exibirListaAnimais: boolean = false;
  numeroDeAnimais: number = 0;
  mostrarErro: boolean = false;
  

  constructor() {
    this.animalTratamento = new AnimalEstimacao();
  }

  cadastrar(): void {
    if(this.animalTratamento.id <= 0) {
      this.mensagemErro = `O ID deve ser maior que zero.`;
      this.exibirErro();
    } else {
      if (!this.ehIdCadastrado(this.animalTratamento.id)) {
        this.animais.push(this.animalTratamento);
        this.animalTratamento = new AnimalEstimacao(0, '', '', '', '');
        this.mensagemErro = '';
        this.numeroDeAnimais = this.animais.length;
        this.limparErro();
      } else {
        this.mensagemErro = `Id ${this.animalTratamento.id} já cadastrado!`;
        this.exibirErro();
      }
    }
  }

  remover(animalARemover: AnimalEstimacao): void {
    const indxARemover = this.animais.findIndex(animal =>
      animal.id === animalARemover.id);

    if (indxARemover >= 0) {
      this.animais.splice(indxARemover, 1);
    }

    this.numeroDeAnimais = this.animais.length;
  }

  private ehIdCadastrado(id: number): boolean {
    const animaisRetornados = this.animais.filter(animal => animal.id === id);
    return animaisRetornados.length > 0;
  }

  editar(animal: AnimalEstimacao): void {
    this.animalTratamento = new AnimalEstimacao(
      animal.id,
      animal.nome,
      animal.tipo,
      animal.dataNascimento,
      animal.dono
    );
    this.mostrarFormularioEdicao = true;
  }
  
  atualizar(): void {
    const index = this.animais.findIndex(a => a.id === this.animalTratamento.id);
  
    if (index !== -1) {
       
    const animalAtualizado = new AnimalEstimacao(
      this.animalTratamento.id,
      this.animalTratamento.nome,
      this.animalTratamento.tipo,
      this.animalTratamento.dataNascimento,
      this.animalTratamento.dono
    );
      
      this.animais[index] = this.animalTratamento ;
  
      this.animalTratamento = new AnimalEstimacao(0, '', '', '', '');
      this.mostrarFormularioEdicao = false;
    }
  }
  
  listarAnimais() {
    this.exibirListaAnimais = true;
  }

  exibirErro(): void {
    this.mostrarErro = true;
  }

  limparErro(): void {
    this.mostrarErro = false;
    this.mensagemErro = '';
  }
  
}
