# **Javascript Design Patterns: 20 Patterns for Expert Code**

## **Aula 1**
### Introdução

Ninguém se importa :)

---

## **Aula 2 e Aula 3**
### Escopo Global, Object Literal Pattern e Namespace Design Pattern

Basicamente ensinando sobre não declarar várias variáveis no escopo Global e não nomeá-las de maneira genérica ou simplista.

Falando em código, ao invés disso:

```
const texto = 'Textão';
const exemplo = 'Vixeee';
```

Faça isso:

```
const stringsDeTexto = {
  texto: 'Textão',
  exemplo: 'Vixeee'
}
```

---

## **Aula 4**
### Module Design Pattern

O primeiro módulo com um exemplo real, no diretório [Module Design Pattern](./module-design-pattern/index.js) onde é mostrado como os métodos dentro do `return {}` da função se tornam acessíveis enquanto os que não estão acabam estourando erros.

Esse padrão é baseado exatamente na declaração direta de metódos privados dentro da função e métodos públicos dentro do `return {}`.

> Obs: `Método` é somente uma nomenclatura dada pra uma função dentro de um objeto ou dentro de outra função.

---

## **Aula 5**
### Module Reveal Pattern

O instrutor alega que [Module Reveal Pattern](./module-reveal-pattern/index.js) é um modelo mais organizado do que `Module Design Pattern` porque separa o processo de "revelar" do processo de "criar" os métodos e variáveis.

Como todos são declarados dentro do escopo da função e não dentro do `return {}` a convenção de adicionar um underline `_` na frente dos métodos privados é adotada.

---

## **Aula 6**
### Controlling the Global Access Completely

> Design Patterns não são soluções mas sim sugestões.

Nesse módulo o autor pegou uma função escrita utilizando o Module Reveal Pattern e envolveu com uma IIFE (Immediately Invoked Function Expression). Dessa maneira:


```
(function (win, doc, $) {
  const funcaoModulo = (function () {

    // várias coisas aqui dentro.

    if (!win.funcaoModulo) win.funcaoModulo = funcaoModulo;
  })
})(window, document, jQuery);
```

Em outras palavras:

* Ele envelopou `funcaoModulo` numa função anônima que é invocada automaticamente após sua criação;
* Essa função tem como parâmetros obrigatórios `win, doc, $` e recebe `window, document, jQuery`;
* Ao final, existe um `if` que confere se `funcaoModulo` existe como método no escopo global, ou seja, dentro da variável `window`. Se não, cria esse método.

---

# Creational Design Pattern

## **Aula 7**
### The Singleton Design Pattern

Uma vantagem do Singleton é que você pode controlar quando será instanciado, ou seja, não é instanciado no início da aplicação.  
Além disso, a ideia é que ele seja iniciado somente uma vez agindo como uma interface global.  
O exemplo de [Singleton Design Pattern](./singleton-design-pattern) foi testado utilizando o evento de `click` e `keypress` e, foi possível compartilhar o estado de um array, adicionando itens por meio de clique na página ou apertando a letra "c".

## **Aula 8**
### The Factory Design Pattern

Para quando você precisa de controle sobre a customização de um item.  
Extrai a criação de um item do objeto que está criando-o, ou seja, a criação ocorre de uma maneira mais genérica, facilitando atualizações ou novas versões destes itens por não estarem engessados.
No exemplo de [Factory Design Pattern](./factory-design-pattern) extraímos a função `create` da Singleton e implementamos o retorno do parâmetro `color`, sendo `red` ou `blue`.

## **Aula 9**
### The Abstract Factory Design Pattern

Mais dinâmica e genérica do que a Factory e você só criará uma Abstract Factory caso a primeira esteja com a lógica muito complicada, engessada e/ou seja necessário adicionar mais funcionalidades.  
No exemplo de [Abstract Factory Design Pattern](./abstract-factory-design-pattern) criamos uma função e atribuímos o método `create` à um `prototype` de `redCircle` e 
`blueCircle`, essa abstração permite o registro de múltiplos `types` de objetos e permite verificar quais são classes válidas `if (cls.prototype.create)` para criar itens.  
Ainda sem certeza de onde utilizar isso 🤷‍♂️  
Acho que merece um exemplo melhor 🤔

## **Aula 10 e 11**
### The Builder Design Pattern

Segundo o autor, um ótimo exemplo de [Builder Design Pattern](./builder-design-pattern) é o método `$` do jQuery pelo fato dele possuir múltiplos usos.
Normalmente é uma abordagem utilizada quando precisamos agrupar múltiplos objetos e precisamos que eles sejam utilizados por um terceiro objeto.
Foi difícil entender, difícil refatorar e ainda não imagino cenário de utilização para tanto.  
Acho que merece um exemplo melhor 🤔 [2]

## **Aula 12**
### The Prototype Design Pattern

A reutilização dos métodos desta abordagem torna mais eficiente o uso de memória e é de fácil implementação.
Basicamente é apresentado um loop `for in` que desempenha a cópia dos `prototypes` de um objeto **A** para **B**.
Após criar o objeto **B** e invocar a função `clone` é possível utilizar todos os métodos(`prototypes`) do objeto **A**.
Confira aqui o [Prototype Design Pattern](./prototype-design-pattern).

---

# Structural Design Pattern - Part 1

## **Aula 13**
### Abstracting Our Singleton

Nessa aula o autor começa a deixar o Single mais abstrato para futuros usos. Irrelevante.

## **Aula 14**
### The Adapter Design Pattern

Assisti a aula, vi o código, acredito que tem uma complexidade desnecessária.  
Decidi seguir exemplicando este Design Pattern com [este exemplo do site dofactory](https://www.dofactory.com/javascript/design-patterns/adapter).  
O objetivo do exemplo do dofactory é recriar uma função de frete que no final oferece mais segurança (por ter autenticação) e um preço mais barato.  
Apesar da ideia ser boa, a aplicação me parece fora de contexto como se estivéssemos duplicando código e, por isso, resolvi modificá-lo.

Carlos Caballero, neste post intitulado [Design Patterns - Adapter ](https://dev.to/carlillo/design-patterns---adapter-2pi3) usa um exemplo muito bom fazendo uma comparação com Dragon Ball. 🤷‍♂️  
Basicamente o que ele explica é: 

- Imagine que você tem uma classe `Guerreiro` com o método de `Ataque`;
- Saiyajins([Goku](https://dragonball.fandom.com/pt-br/wiki/Goku)) e Namekuseijins([Piccolo](https://dragonball.fandom.com/pt-br/wiki/Piccolo)) são Guerreiros e portanto tem essa habilidade;
- Androids, como por exemplo o [Android 17](https://dragonball.fandom.com/wiki/Android_17) não tem essa habilidade;
- Portanto, precisaremos criar um `Adaptador` que importa a classe `Guerreiro` e aplica nos Androids para que eles possam atacar também;
- Sacou? 


Segundo o autor, o contexto de utilização de um [Adapter Design Pattern](./adapter-design-pattern) seria quando você possui dois objetos diferentes, eles não sabem interagir entre si e você precisa fazer esta ponte. Por exemplo, quando novos componentes precisam ser integrados na aplicação.

Não contente com isso, fui atrás de mais uma referência e [encontrei este post](https://medium.com/javascript-in-plain-english/javascript-design-patterns-adapter-explained-cbcffbb4b8bc) que trás algumas boas definições:

- > Adapter is a structural design pattern so it can improve quality and scalability of your code, massively.

- > Adapter Pattern is an abstraction for nasty or 3rd party code, you need in your main clean codebase.

Isso explica o porquê deste design pattern também ser chamado de **Wrapper Pattern**.
Ele também é utilizado para envelopar um código de terceiros e nos auxiliar a mantermos controle com um único ponto de inserção.

## **Aula 15**
### The Composite Design Pattern


## **Aula 16**
### The Decorator Design Pattern

O [Decorator Design Pattern](./decorator-design-pattern) estende o comportamento de um objeto dinamicamente.  
Você é capaz de adicionar funcionalidades sem criar uma sub-classe ou alterar a interface/constructor original.  
E ele realiza esse processo envelopando o objeto original.

A questão aqui é a seguinte (adaptação de [doFactory](https://www.dofactory.com/javascript/design-patterns/decorator)):  
Decorators provem flexibilidade a linguagens de tipos estáticos permitindo mudanças no momento do runtime.  
O Javascript já é uma linguagem dinâmica e esse comportamento é nativo.  
Por essa razão, o Decorator Pattern é menos relevante para pessoas desenvolvedoras que trabalham com Javascript.

---

# Structural Design Pattern - Part 2

## **Aula 17**
### The Fly Weight Design Pattern

Busca reduzir o uso de memória na aplicação extraindo propriedades e métodos de objetos grandes e compartilhando o máximo possível de dados.
Encontrei esse artigo que explica de maneira mais completa do que o autor: [Javascript Design patterns: Flyweight Pattern](https://dev.to/jazsmith24/javascript-design-patterns-flyweight-pattern-1g5g) e diversas falas estão sendo adaptadas no texto abaixo.

#### **Como funciona?**

Cada objeto "flyweight" é dividido em duas partes:

- **Estado intrínseco:** Estado armazenado no objeto Flyweight;
- **Estado extrínseco:** É armazenado ou processo por objetos clientes e passado para o Flyweight onde suas operações são invocadas.

#### **Prós e Contras**

- **Prós:** Economiza espaço (e se torna mais evidente a medida que mais objetos flyweights são compartilhados) e auxilia a enfrentar restriçõs de memória.
- **Contras:** Pode introduzir um custo associado à transferir, encontrar e/ou processar estado extrínseco, especialmente se este já foi previamente armazenado como um estado intrínseco.

