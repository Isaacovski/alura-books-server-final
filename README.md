# 📚 API de Livros — Node.js + Express

Projeto simples de API REST desenvolvido para praticar conceitos de backend utilizando **Node.js** e **Express**.

A API permite cadastrar, listar, modificar e deletar livros.

---

## 🚀 Tecnologias usadas

* Node.js
* Express
* JavaScript
* REST API
* Postman (testes)
* cors

---



O projeto segue uma separação simples:

* **Routes** → define as rotas da API
* **Controllers** → recebe as requisições
* **Services** → faz a manipulação dos dados

---

## ⚙️ Como rodar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Isaacovski/alura-books-server-final
```

### 2️⃣ Instalar dependências
usar as versões especificadas pois caso tenha alguma mudança nas dependencias o projeto não irá funcionar 
```bash
npm install
npm install cors@2.8.5
npm install express@4.19.2
```

### 3️⃣ Iniciar servidor

```bash
node src/app.js
```

Servidor roda em:

```
http://localhost:8000
```

---

## 📌 Endpoints da API

### 🔎 Listar livros

```
GET /livros
```

---

### 📖 Buscar livro por ID

```
GET /livros/:id
```

---

### ➕ Inserir livro

```
POST /livros
```

Body (JSON):

```json
{
  "id": "1",
  "nome": "Nome do livro"
}
```

---

### ✏️ Atualizar livro

```
PATCH /livros/:id
```

---

### 🗑️ Deletar livro

```
DELETE /livros/:id
```

---

## 🧪 Testes

para testar e preciso ter o **Postman**.

---

## 🎯 Objetivo do projeto

Praticar:

* criação de API REST
* organização em camadas (controller/service)
* métodos HTTP
* manipulação de dados

---


### ilustração de como os arquivos conversam entre si

<img width="760" height="420" alt="Capturar" src="https://github.com/user-attachments/assets/b89be9f9-68ab-4a01-97ed-9be3563c76ec" />

## em fotos vou mostar como o projeto funciona 
temos aqui no ID 1 algo registrado vamos usar o path para mudar ele 
<img width="656" height="507" alt="1" src="https://github.com/user-attachments/assets/bb7f1593-b6a1-4855-b475-2e4936958568" />

## digitei contratado com sucesso e iniciei o path 
<img width="635" height="441" alt="2" src="https://github.com/user-attachments/assets/fba01eff-8e41-4684-b2d1-5a90578e2f31" />

## dei um get para ver se deu certo. é agora o me contrata virou Contratado <3 com sucesso 
<img width="636" height="547" alt="3" src="https://github.com/user-attachments/assets/00acf08a-c531-49e5-9712-a1236a4277fa" />




