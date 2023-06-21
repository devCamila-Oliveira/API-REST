# API-REST
Projeto para criação de uma api rest para um Sistema de Gestão de Recompensa para Tarefas de Crianças


## Build
Antes de tudo é necessário configurar arquivo .env, pode ser usado o arquivo [.env.example](https://github.com/devCamila-Oliveira/API-REST/blob/main/.env.example) como exemplo.

### Docker
Depois de configurar o .env já é possível executar o build e rodar. Usar opção de build ao rodar também é possível:
```shell
# Buildar containers
docker compose build

# Inicia e acopla containers
docker compose up

# Necessariamente executa o build antes de executar
docker compose up --build
```

### Local
Caso decida usar um banco local, ainda é necessário configurar o arquivo .env corretamente, tenha certeza de que o banco está no ar arquivos configurados corretamente para uso correto da API.

```shell
# Baixar dependências
npm install

# Iniciar servidor express
npm run start
```

### Chamadas
Foi utilizado principalmente o programa [Insomnia](https://insomnia.rest/) para fazer os testes locais, deixamos na raiz um [preset](https://github.com/devCamila-Oliveira/API-REST/blob/main/Insomnia_RecomKids.json) para facilitar os testes.