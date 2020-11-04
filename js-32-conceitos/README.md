


# Promises

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