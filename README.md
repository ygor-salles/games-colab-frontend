# GAMES COLAB

Será implementado, utilizando a MEAN Stack (Mongo, Express, Angular e Node), um sistema colaborativo para cadastramento, avaliação e consulta de jogos.

----------

## Progresso atual

Dois CRUDS implementados para uma aplicação AngularMaterial, conectando com o backend

> Para fins de mock, os dados não estão salvos no banco. Se encontram disponíveis em um arquivo json (db.json)

----------

## Execução (SEM Docker)

Nos diretórios `/backend` e `/frontend`:

```bash
npm install && npm start
```

----------

## Execução (COM Docker)

> Para um ambiente Docker executar, é necessário ter instalado o [Docker](https://docs.docker.com/engine/install/) e o [Docker Compose](https://docs.docker.com/compose/install/).

Deve-se estar no diretório raiz do projeto para prosseguir com os comandos abaixo. Os comandos variam dependendo sistema operacional utilizado.

### Linux

Para criar as imagens:

```bash
make build
```

Para criar as imagens, **se elas não existirem**, e iniciar os containers (comando direto):

```bash
make up
```

Em caso de dúvida sobre as opções de comandos disponíveis execute o `make help`.

### Windows

Para criar as imagens:

```bash
docker-compose build
```

Para criar as imagens, **se elas não existirem**, e iniciar os containers (comando direto):

```bash
docker-compose up
```
