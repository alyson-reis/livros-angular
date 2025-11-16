import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'O Peregrino',
      resumo: 'Um clássico da literatura cristã.',
      autores: ['John Bunyan']
      
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'A Cruz e o Punhal',
      resumo: 'A história de David Wilkerson e sua missão nas gangues de NY.',
      autores: ['David Wilkerson']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Em Seus Passos O Que Faria Jesus?',
      resumo: 'A obra que originou o movimento WWJD.',
      autores: ['Charles Sheldon']
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

incluir(livro: Livro): void {
  let novoCodigo = 1;
  if (this.livros.length > 0) {
    novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
  }
  livro.codigo = novoCodigo;

  // Salva uma cópia para evitar referências vivas
  const copia: Livro = {
    codigo: livro.codigo,
    codEditora: livro.codEditora,
    titulo: livro.titulo,
    resumo: livro.resumo,
    autores: [...(livro.autores || [])]
  };

  this.livros.push(copia);
}
  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
