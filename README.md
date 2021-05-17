# Back-end

## Rodando o servidor
### Critérios
Para rodar o servidor é necessário:
    1. ter instalado o mysql server
    2. criar um db ou adicionar um existente nas configurações de conexão com o db em vitto_cash_machine/server/models/models.js
    3. instalar dependências com npm install

Com os critérios acima atendidos:
```shell
#vitto_cash_machine/server
npm app_server.js
```

## Sobre
A API foi desenvolvida utilizando NodeJs com o framework Express e foi utilizado a lib do Passport para autenticação das rotas, a conexão com o database foi feita através do Sequelize com o mysql

## Utilização
### Rotas
    baseUrl: http://localHost:3001/api

### POST - /signup 
```JSON
//Request body
{
    "email": "user@mail.com",
    "password": "123456",
    "cpf": "12345678910"
}
```
```JSON
//Response
{
"user": {
    "id": 1,
    "email": "user@mail.com",
    "cpf": "12345678910",
    "balance": 0
}
}
```

### POST - /login
```JSON
//Request body 
{
    "email": "user@mail.com",
    "password": "123456"
}
```
```JSON
//Response
{
    "user": {
        "id": 2,
        "cpf": "12345678989"
    }
}
```

### GET - /user (Protegida)
```JSON
//Response
{
    "id": 1,
    "balance": 0,
    "cpf": "12345678910"
}
```
Tentar acessar sem estar logado vai gerar uma resposta de 401 Unauthorized
```JSON
//Response 401 Unauthorized
```

### PUT - /operations (Protegida)
```JSON
//Request body
{
    "cpf": "12345678989",
    "type": "depósito",
    "amount": 500
}
```
```JSON
//Response
{
    "operation": {
        "id": 1,
        "type": "depósito",
        "date": "2021-05-17T19:20:13.944Z",
        "amount": 500,
        "userId": 1
    }
}
```
Tentar acessar sem estar logado vai gerar uma resposta de 401 Unauthorized
```JSON
//Response 401 Unauthorized
```

### POST - /extract (Protegida)
```JSON
//Request body
{
    "cpf": "12345678910"
}
```
```JSON
//Response
{
    "balance": 500,
    "operations": [
        {
        "id": 1,
        "type": "depósito",
        "date": "2021-05-17T19:20:13.000Z",
        "amount": 500,
        "userId": 1
        }
    ]
}
```
Tentar acessar sem estar logado vai gerar uma resposta de 401 Unauthorized
```JSON
//Response 401 Unauthorized
```

### GET - /logout (Protegida)
```JSON
// Response 204 NO CONTENT
```
Tentar acessar sem estar logado vai gerar uma resposta de 401 Unauthorized
```JSON
//Response 401 Unauthorized
```

# Front-end

## instalando dependências do projeto
```shell
    npm install
```

## Rodando o cliente
``` shell
    npm start
```

## Sobre
O Front-end dessa aplicação foi desenvolvido utilizando o ReactJS foi utilizado também, contextApi para gerenciamento e compartilhamento de estados, metodologia AtomicDesign para gerenciamento de componentes e a biblioteca axios para conexão com o Back-end

base do design do projeto: (https://www.figma.com/file/dMMvS5aXaHtiGlQhd6XqqH/Vitto-Cash-Machine?node-id=2%3A2)
