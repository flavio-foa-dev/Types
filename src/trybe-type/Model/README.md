# Model com MSQL

Vamos agora colocar os aprendizados em pratica ver como podemos usar types Assertions, Generics, Classes e Interfaces em algo real life ,Para esse projeto vamos usar um banco de dados  mysql para gerenciar uma lista de livros. CRie o banco usando sql abaixo
```
CREATE DATABASE IF NOT EXISTS books_api;

USE books_api;

CREATE TABLE IF NOT EXISTS books
(  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2),
  author VARCHAR(100) NOT NULL,
  isbn VARCHAR(100),
  PRIMARY KEY(id)

);

INSERT INTO books (title, price, author, isbn)
VALUES ('Código Limpo', 125.9, 'Robert C Martin', '8576082675'),
  ('Refatoração', 129.9, 'Martin Fowler', '8575227246'),
  ('Padrões de Projetos', 141.98, 'Erich Gamma', '8573076100');

  ```

  ## Model com sequelize

  A implementacao do sequelize  e uma  aplicacao com typescript  diferente um pouco do metodo que utiliza o `sequelize-cli` para ciacao de modelos.

isso porque o `sequelize -cli` nao da suporte nativo  na interpretacao/criacao de migrations. seeders, model em TS.

Entao  quando utilizamos o CLI do sequelize para gerar esses componetes, ele gera arquivos `*.js` que nao sera interpretado pelo TS.

Mas não se preocupe! O Sequelize possui suas próprias definições de tipos, mas isso significa que para utilizarmos ele na nossa API teremos que fazer algumas coisas “na mão”.

**Configuracao inicial**
```
const path = require('path');

module.exports = {
  'config': path.resolve(__dirname,'dist','database','config', 'database.js'),
  'models-path': path.resolve(__dirname,'dist','database','models'),
  'seeders-path': path.resolve(__dirname,'src','database', 'seeders'),
  'migrations-path': path.resolve(__dirname,'src','database', 'migrations'),
};
```
aque podemos notar que o caminho de config e model-path apontam para a pasta rail dist ao invez de src
isso e necessario ja que como dito anteriormenmte, o CLI no deve conseguir interpretar esses recursos caso sejam em *.ts, sendo portanto necessaria a transpilacao desses recurssos para JS VANILHA

Nesse caso, a pasta build é referente a pasta configurada em seu tsconfig.json, na propriedade compilerOptions.outDir. Em outras palavras, a pasta gerada após a aplicação do tsc.

Os arquivos em seeders-path e migrations-path não sofrerão ação do TS, dado que são em *.js. Portanto podem ficar em src.

Agora rode o comando de inicialização do sequelize:

```
npx sequelize-cli init
```

# Criando o arquivo de configuracao e iniciando o banco





