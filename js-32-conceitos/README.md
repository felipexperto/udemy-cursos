# **[32 conceitos que ~~todo desenvolvedor~~ toda pessoa desenvolvedora de Javascript deveria saber](https://www.udemy.com/course/32-conceitos-todo-dev-javascript-deveria-saber/)**

Esse é um curso gratuito na Udemy e que atualmente já tem mais de 32 conceitos. Considero muito bem explicado e tendo como principal diferencial os exemplos diretos e sucintos.

Serve muito bem de base para estudos mais profundos sobre os N assuntos que são abordados.

Abaixo você encontra algumas explicações (não literais) sobre pontos que achei interessantes por ter aprendido ou ficado mais claro graças às explicações.

**Recomendo fortemente a inscrição :)**

---

##  **Promises**
Uma Promise é realmente uma promessa. Por exemplo, quando criança, sua mãe pode ter prometido comprar um brinquedo pra você na volta (essa é conhecida) e algumas coisas podem ter acontecido:

- Ela achou que você se comportou bem comprou;
- Ela não comprou o brinquedo na volta;
- Ela comprou o brinquedo em outro dia;
- ...

Enfim, uma promessa em Javascript é semelhante à isso, é um objeto que representa uma operação assíncrona e seu resultado. Não ficou muito claro, né?

Então vamos de exemplo. Digamos que você queira fazer uma chamada para uma API e pegar alguns dados. Então você foi no [jsonplaceholder](http://jsonplaceholder.typicode.com/), não quis ler a documentação (achando que estava abalando) e fez o seguinte:

```
const dados = fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(dados);
```

E como resposta você recebeu: `Promise { <state>: "pending" }`

**Porquê?** Porque ao contrário de uma chamada de função qualquer, o `Fetch` é baseado em Promessas e você não sabe quando o valor será retornado, ou seja, é assíncrono. Em outras palavras, você tentou dar um `console.log` sendo que a `Promise` ainda está sendo executada.

Por isso é necessário usar o método `then` e o método `catch`.  
SE a requisição for realizada com sucesso(`Fulfilled`) o `then` será executado.  
SE a requisição falhar(`Rejected`) o `catch` será executado.

Um exemplo de código (que funciona):

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) // transformando a resposta em JSON
  .then(json => console.log(json)) // exibindo no console
  .catch(err => console.log('erro: ', err)) // exibindo erro
```

E agora você pode alterar a url para `https://jsonplaceholderERRO.typicode.com/todos/1`, e verá que vai cair no `catch` :)

Você pode encontrar uma boa explicação e mais detalhada neste artigo: [How to make HTTP requests using Fetch API and Promises](https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444).


##  **Generator**

```
function *iteraGenerator(total) {
  for(let i = 1; i < total; i++) {
    yield i;
  }
}
const totalGenerator = iteraGenerator(5);
console.log(totalGenerator.next().value);
```

`yield` é semelhante ao `return`, no entanto, ao invés de encerrar a execução, ele pausa a execução na linha que está e ao executar a função novamente vai até o próximo `yield`;

O `next` executa o método até alcançar o próximo `yield`;

O `*` (asterísco) é parte obrigatória da síntaxe;

## **Recursão**

Uma função chamar a si mesma.

```
function contagem(numero) {
    console.log(numero);
    if(numero > 0) {
        contagem(numero -1);
    }
}
contagem(5);
```

## **Factory**

Uma **Factory** é uma função que não é uma classe ou construtor e, que retorna um objeto.

```
const Mamifero = function (nome, som) {
  return {nome, som}
}
  
const cachorro = Mamifero('cachorro','auau');
console.log(cachorro);
```

## **Currying**

Transforma uma função com múltiplos argumentos em uma série de execução de funções;

```
// sem currying
const dragao = (nome, tamanho, elemento) => {
  return `${nome} é um dragão ${tamanho} e cospe ${elemento}!`
}
console.log(dragao('Mushu', 'pequeno', 'fogo'));
```

```
// com currying
// opção 01
const dragao = (nome) => (tamanho) => (elemento) => {
  return `${nome} é um dragão ${tamanho} e cospe ${elemento}!`
}
console.log('Opção 01', dragao('Mushu')('pequeno')('fogo'));

// opção 02
const mushu = dragao('Mushu');
const mushuPequeno = mushu('pequeno');
console.log('Opção 02', mushuPequeno('fogo'));
```


## **High Order Functions**

Definição: 

> Funções que podem receber outras funções como argumento ou retornam uma função

## **Polimorfismo**

> **A habilidade de chamar o mesmo método em diferentes objetos.**  
> Por exmeplo, ter uma classe que tem um certo método;  
> Criar uma nova classe que vai herdar essa classe (com o método);  
> E a partir dessa nova classe poder usar um método que já está na classe pai sem precisar escrever esse método novamente na classe filho.

## **Call vs Apply vs Bind**

```
/*
  Call:
  Só é necessário passar o contexto do this
*/
const dados = { nome: 'Fulano' };
const saudacao = function(idade) {
  console.log(`Bem-vindo ${this.nome}, sua idade é {idade}`);
};
saudacao.call(dados, 28);
  
/*
  Apply:
  Funciona da mesma maneira que o Call
  porém necessita que os argumentos sejam passados dentro um array
*/
const dados = { nome: 'Fulano' };
const argumentos = [28];
const saudacao = function(idade) {
  console.log(`Bem-vindo ${this.nome}, sua idade é {idade}`);
};
saudacao.apply(dados, argumentos);
  
  
/*
  Bind:
  Cria uma função a partir de outra função
  Sendo necessário somente passar o contexto
*/
const dados = { nome: 'Fulano' };
const saudacao = function(idade) {
  console.log(`Bem-vindo ${this.nome}, sua idade é {idade}`);
};
const bound = saudacao.bind(dados);
bound(28);
```



## **Sequência de comparações com igualdade ampla ( `==` )**

```
null == undefined, 
number == string, 
boolean == number, 
boolean == string, 
objeto == primitivo
```

Sequência de comparações com igualdade estrita ( `===` ):

> Valor e tipo devem ser iguais para retornar true

Consultar: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness


## **Dicas**

Removendo dados repetidos de um array (flat) utilizando Set

```
let dados = [1, 2, 3, 3, 4, 4, 5];
const numeros = new Set(dados)
dados = Array.from(numeros);
```

Modo alternativo de chamar uma IIFE

```
!function() {
alert ('');
}();
```

