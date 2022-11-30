## introducao
### Vamos Aprender

Vamos aprender a utilizar o `Express`  com o TypeScript. Vamos aprender como criar uma aplicaacao Web Node com o Framework mais utilizado e ap;icar todas as nocas feuture que apredemos nessa secao
- configuranso um projeto  Node.JS com TypeScript
- criar uma aplicacao express com typeScript

O express e uma biblioteca mais utilizada para criacao de API em nodeJS sendo assim. devemos aprender a usar-la com typescript [e] imprescindivelpara que voce consiga tirar aproveitamento desta ferrameta de desenvolvimento escalavel

# configuracao projeto typeScriptS node.js

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "rootDir": "./",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}
```
Vamos criar nesse arquivo um objeto responsável por identificar a numeração relativa às respostas http:
```
// ./statusCodes.ts
const statusCodes = {
  OK: 200,
  NOT_FOUND: 404,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NO_CONTENT: 204,
};

export default statusCodes;
np
```
package.json
```
...
"scripts": {
    "start": "npm run build && node ./dist/index.js",
    "dev": "tsnd index.ts",
    "build": "tsc"
 },
...
```

Scripts:

start: executa o build da aplicação e depois roda o arquivo compilado dentro da pasta dist;
dev: executa a aplicação em modo de desenvolvimento utilizando o ts-node-dev;
build: executa a compilação do projeto utilizando o TSC.
Agora vamos executar a aplicação utilizando o script start:


Além disso, vamos instalar uma lib que faz o tratamento de erros disparar diretamente o middleware de erro sem a necessidade de colocar try/catch ao longo do seu código. Essa lib é a express-async-errors.

```
// ./index.ts

import express, { NextFunction, Request, Response } from 'express';
// import statusCodes from './statusCodes';
//
// const app = express();
//
// app.use(express.json());
//
// const PORT = 8000;
//
// app.get('/', (req: Request, res: Response) => {
//   res.status(statusCodes.OK).send('Express + TypeScript')
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'BadRequestError':
      res.status(400).json({ message });
      break;
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
```

Além disso, vamos instalar uma lib que faz o tratamento de erros disparar diretamente o middleware de erro sem a necessidade de colocar try/catch ao longo do seu código. Essa lib é a express-async-errors.

`npm install express-async-errors`

```
// ./index.ts

import express, { NextFunction, Request, Response } from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';

// ..

```
Para nosso setup ficar 100% vamos instalar mais duas libs que usaremos um pouco mais a frente. Elas nos ajudarão a disparar erros específicos para serem tratados no middleware de erro.

`npm install restify-errors @types/restify-errors`



para criarmos im projeto Node mais typescript, primeiramente devemos iniciar nosso projeto nodde padrao

1. criar a pasta `mkdir <nome> && cd `  cria a pasta e entra no diretorio
2. `npm init <y>` criamos pacjage.json do projeto
3. `.gitignore`  criarmos regras para nao subir para o github ex: node_modules
4. `npm install -D typescript` adicionamos o typescript com depedencia de desenvolvimento
5. devemos criar arquivo `tsconfig,json`
6. `npm install -D ts-node-dev` executa o codigo emdesenvolvimento em typescript
7. `npm install -D @types/node` adiciona os types do  node
8. `npm install express`
9. `npm install -D @types/expres` adiciona os types do  express
10.
