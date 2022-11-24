# Types - introducao
a linguagem foi criada pela Microsoft
### vamos aprender:

1. a linguagem de programacao TypeScript
2. sua importancia e contexto que ela pode ser aplicada
3. relacao de TypeScript com javaScript
4. seus super poderes que adiciona a linguagem javaScript


## Aprendizagem

 - Definir o que e a linguagem typeScript
 - Compreender relacao entre linguagem typeScript e javaScript
 - Compreender o que e tipagem
 - Compreender a diferenca entre compilador e transpilador
 - Compilar o codigo typeScript para javaScript
 - Compreender o sistema de tipos typeScript
 - Declarar variaveis do tipo primito do typeScriptS

Ao aprender TypeScript você expandirá sua árvore de habilidades como pessoa desenvolvedora😉.

Além de ela estar presente em inúmeras ferramentas e frameworks do mercado como: Jest, Redux, Deno, Vercel, Yarn, GitHub Desktop, etc, também tem sido adotada por muitas empresas, incluindo grandes players como: Slack, Airbnb e Google.

Especificamente, o TypeScript é um superconjunto do ECMAScript 2015, mais comumente denominado ECMAScript 6 ou ES6. Sendo assim, todo o código JavaScript também é código TypeScript, e um programa desenvolvido em TypeScript pode consumir o JavaScript de forma direta. É de explodir a mente! 🤯

## Por que  a linguagem typescript foi criada
javaScript e, hoje a linguagem oficial da web, sendo utilizada para aplicacoes multiplataforma que rodam tanto navegador quantonos servidores e mais. No entanto, ela tem uma limitacao; ela nao foi concebida para criacao  de aplicativos envolvendo milhares de linha de codigos, pois ela na aprresenta alguns recurso presente em outras linguagens

A lionguagem typeScript foi desenvolvido para resolver as limitacoes do javascript, sem prejudicar sua capacidade de executar codigo em todas as plataforrmas

hum legal isso ne...

## Tipagem

o grande recurso do Typescript e o sistema de tipos. Em typescript podemos indentificar o tipo de dado em variaveis, parametros ou retorno das funcoes utilizada a tipagem , sacou?.

Tipagem, também conhecida como dicas de tipos, é a forma que utilizamos para descrever de qual tipo será o valor de um componente do nosso código - por exemplo: variáveis, expressões, funções ou módulos. Isso proporciona uma melhor documentação do código e permite que o TypeScript valide se ele está funcionando da maneira correta.

podemos categorizar a tipagem em uma liguagem de programacao como:

### Tipagem Estatica

nao permite que a pessoa desenvolvedora altere o tipo apos ele ser declarado e , geralmente, a verificacao de tipo e feita  em tempo de compilacao

✅ A tipagem utilizada na linguagem TypeScript tem essa característica e vamos aprender sobre o seu compilador mais à frente.

### Tipagem Dinamica

esta ligada a Habilidade da linguagem de programacao em "escolher o tipo de dado" de acordo com o balor atribuido a variavel em tempo de execucao - ou seja  de forma dinamica

❌ Não há essa característica na tipagem do TypeScript.

## Tipagem forte:
Linguagens fortemente tipadas não realizam conversões automaticamente. Melhor dizendo, não é possível realizar operações entre valores de diferentes tipos, sendo necessário que a pessoa desenvolvedora faça a conversão para um dos tipos, caso seja possível.

✅ A tipagem utilizada na linguagem TypeScript também possui essa característica.

### Tipagem fraca

A tipagem fraca tem a característica da linguagem de realizar conversões automáticas entre tipos diferentes de dados - ou melhor, operações entre valores de tipos diferentes podem ocorrer sem a necessidade de uma conversão explícita de tipo. Porém, o resultado pode não ser o esperado e erros podem ocorrer durante a execução.

❌ Não há essa característica na tipagem do TypeScript.


### Tipagem Significado

Estatica: nao permite que a pessoa desenvolvedora altere o tipo apos ser declarado.

Dinamica:  a a liguagem de programacao "escolhe" o tipo de dado a parti do valor atribuido a variavel em tempoo de execucao.

Fraca: tiopagem fraca em caracteristica da linguagem realiza conversoes automatica entre tipos diferentes de dados.

Forte: Linguagem fortemente tipadas nao realizam conversoes automatica



### Inferencia de tipo
Em Lógica, inferência ou ilação é operação intelectual mediante a qual se afirma a verdade de uma proposição em decorrência de sua ligação com outras proposições já reconhecidas como verdadeiras.

Algumas linguagens com tipagem estática podem fazer a inferência de tipo na declaração de variáveis, mas sem permitir que o tipo seja alterado após a declaração.

O TypeScript é uma dessas linguagens. Podemos usar a inferência de tipo, mas o compilador apresenta um erro quando tentamos atribuir um valor de tipo diferente à variável. Isso porque ele apenas realiza a inferência do tipo inicial da variável. Depois disso, como a linguagem possui tipagem estática, não é possível alterar o tipo.

Então, TypeScript é uma linguagem fortemente tipada e estaticamente tipada que possui inferência de tipo.

### Diferenca entre Compilador e Transpilador

Um **Compilador** e um programa que traduz o codigo desenvolvido usando uma linguagem de mais alto nivel em uma linguagem de mais baixo nivel. como exemplo tewmos GCC da linguagem C e o JAVA da linguagem JAVA

Um **Transpilador** e um programa de sistema que tradus o codigo desenvolvido utilizando uma linguagem de mais alto nivel e um codigo de um programa equivalente de uma outra linguagem de mais alto nivel ou em versao diferente da mesma linguagem
como exemplo: J2Cl que transpila o codigo java para o codigo javascript, BABEL que transpila o codigo EcmaScript 6 para EcmaScript 5

Um Transpilador também é considerado por algumas pessoas como um tipo de Compilador que atua em um nível mais alto de abstração. Por isso, muitas vezes você verá pessoas dizendo que o TypeScript é uma linguagem transpilada por traduzir código TypeScript em código JavaScript, ambas linguagens de mais alto nível.

No entanto, o Typescript possui um Compilador denominado TSC (TypeScript Compiler), que é responsável por fazer essa tradução. Além disso, a própria documentação da linguagem trata esse processo de tradução do código feito pelo TSC como compilação.

`typeScript => TYPE_SCRIPT_COMPILER => javaScript`

## TSC - TypeScript Compiler

o TSC  e o responsavel por realizar a traducao ddo nosso codigo TypeScript para o codigo javaScrit.
TypeScript é uma linguagem estaticamente tipada e fortemente tipada? O TSC também é o responsável por realizar a verificação de tipo no nosso código TypeScript.

Para isso, podemos instalar o TSC e o suporte ao TypeScript em nossa máquina via npm, e utilizarmos o comando tsc seguido do arquivo que desejamos compilar e realizar a análise de tipo. Caso não deseje instalá-lo, você pode utilizar o comando tsc como um executável npx.

Para instalar o compilador TypeScript globalmente:

npm install -g typescript
Podemos executá-lo da seguinte forma:
tsc nomeDoArquivo.ts

npx tsc nomeDoArquivo.ts

Obs: A extensão .ts é a extensão padrão para os arquivos TypeScript.

