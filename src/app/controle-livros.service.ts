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
      titulo: 'A cruz de Cristo',
      resumo: 'Considerada um clássico moderno, esta obra combina exposição bíblica excelente,estudo criterioso da fé cristã e o chamado urgente para uma vida ao pé da cruz.',
      autores: ['John Stott']
    },
    {
      codigo: 2,
      codEditora: 3,
      titulo: 'Cristianismo Puro e Simples',
      resumo: 'C.S. Lewis foi convidado pela BBC a fazer uma série de palestras pelo rádio com o intuito de explicar bases da fé cristã de forma simples e clara. Mais tarde, ajustado pelo próprio Lewis, esse material daria origem a Cristianismo puro e simples , um grande clássico da literatura cristã.',
      autores: ['C. S. Lewis']
    },
    
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
