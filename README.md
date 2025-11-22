📚 Projeto Livros Angular

Este repositório contém o primeiro projeto livros-angular, desenvolvido sem integração com banco de dados, como parte das atividades da disciplina de programação. O objetivo é apresentar uma aplicação Angular simples para listagem, inclusão e manipulação de livros utilizando apenas dados locais.

🚀 Tecnologias Utilizadas

Angular (versão utilizada no projeto)

TypeScript

HTML

CSS

🎯 Objetivo do Projeto

O projeto foi criado com o propósito de:

Praticar os fundamentos do Angular.

Entender a estrutura de componentes, serviços e módulos.

Trabalhar com rotas, templates e formulários.

Simular operações de CRUD utilizando dados locais, sem backend.

📁 Estrutura Básica do Projeto

A estrutura principal contém:

src/
 ├── app/
 │    ├── livro.ts                    # Modelo Livro
 │    ├── controle-editora.service.ts # Serviço de Editoras
 │    ├── controle-livros.service.ts  # Serviço de Livros
 │    ├── livro-lista/                # Componente lista de livros
 │    └── livro-dados/                # Componente formulário de livro
 └── ...
🧩 Funcionalidades
✔ Listar livros

Exibe uma lista pré-carregada de livros mantidos no serviço ControleLivrosService.

✔ Cadastrar novo livro

Permite adicionar novos livros utilizando um formulário simples.

✔ Listar editoras

As editoras são carregadas a partir do ControleEditoraService.

✔ Navegação via rotas

Uso de rotas para alternar entre lista e formulário.

▶ Como Executar o Projeto

Instalar dependências:

npm install

Rodar o servidor de desenvolvimento:

ng serve -o

Acessar no navegador:

http://localhost:4200/
💡 Observações

Este projeto não utiliza banco de dados.

Todos os dados são armazenados localmente dentro dos serviços.

O objetivo é apenas fins acadêmicos e de aprendizado.

📘 Próximos Passos (Opcional)

Caso deseje evoluir o projeto:

Adicionar integração com backend (como feito na segunda versão).

Migrar para API em Express + MongoDB.

Melhorar design com Angular Material.

Criar validações mais avançadas nos formulários.

👨‍🏫 Autor

Projeto desenvolvido como parte das atividades de aprendizagem, com foco em compreender a estrutura e funcionamento básico do Angular.
