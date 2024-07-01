# Address Management Application

## Descrição

Este projeto é uma aplicação de gerenciamento de endereços que permite criar, visualizar, editar e excluir registros de endereços. Foi desenvolvido como parte de um teste para uma vaga de estágio desenvolvedor. A aplicação utiliza Node.js com Express no backend e Prisma ORM para gerenciamento do banco de dados, no frontend foi utilizado React.js com Vite.

## Funcionalidades

- Criar novos endereços
- Visualizar a lista de endereços
- Editar endereços existentes
- Excluir endereços
- Buscar endereços por CEP

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Prisma ORM
- SQLite (Como banco de dados em Dev)

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Hook Form
- YUP
- Zustand

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- Node.js
- NPM ou Yarn

## Configuração do Projeto
Esse projeto possui um utilitario que realiza a instalação de todas as dependências do projeto e inicia o servidor, tanto no backend quanto no frontend. 
Para isso basta seguir os passos abaixo:

### 1. Clonar o Repositório

```
git clone https://github.com/WalSacramento/addressProject.git
cd addressProject
```	

### 2. Instalar as Dependências

```
npm run install
```

### 3. Iniciar o projeto

```
npm run start
```

## Acessando a Aplicação
Para acessar a aplicação basta abrir o navegador e acessar o endereço que estará disponível no terminal, o endereço padrão do VITE é `http://localhost:5173`.