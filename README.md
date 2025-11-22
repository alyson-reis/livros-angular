# 📚 Livros Angular (Versão Sem Banco de Dados)

* Este projeto é a primeira versão do sistema Livros, desenvolvido em Angular, utilizando apenas um vetor local como fonte de dados — ou seja, não há integração com servidor ou banco de dados. *

## 🚀 Tecnologias Utilizadas

- Angular
- TypeScript
- HTML
- CSS

## 📁 Estrutura Geral do Projeto

O projeto é composto por:
- LivroListaComponent → Exibe a lista de livros existentes
- LivroDadosComponent → Formulário para cadastrar um novo livro
- ControleLivrosService → Serviço responsável por manipular o vetor de livros
- ControleEditoraService → Serviço para listar e obter nomes das editoras
- livro.ts → Modelo da classe Livro
- (Outros arquivos padrão do Angular)

## 📚 Funcionalidades

*Listar livros*
Mostra todos os livros cadastrados no vetor local.

*Incluir livro*
Adiciona um novo livro preenchendo o formulário em /dados.

*Excluir livro*
Remove um livro diretamente na lista.

## Como Executar o Projeto

*1. Instale as dependências*
npm install

*2. Rode o servidor Angular*
ng serve

*3. Acesse o sistema*
Abra no navegador:
http://localhost:4200

✔ Seleção de editora

Lista carregada a partir de um vetor definido no serviço de editoras.
