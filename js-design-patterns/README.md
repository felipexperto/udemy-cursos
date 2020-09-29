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
O exemplo de [Singleton Design Pattern](./singleton-design-pattern/index.html) foi testado utilizando o evento de `click` e `keypress` e, foi possível compartilhar o estado de um array, adicionando itens por meio de clique na página ou apertando a letra "c".

## **Aula 8**
### The Factory Design Pattern

Para quando você precisa de controle sobre a customização de um item.  
Extrai a criação de um item do objeto que está criando-o, ou seja, a criação ocorre de uma maneira mais genérica, facilitando atualizações ou novas versões destes itens por não estarem engessados.
No exemplo de [Factory Design Pattern](./factory-design-pattern/index.html) extraímos a função `create` da Singleton e implementamos o retorno do parâmetro `color`, sendo `red` ou `blue`.

## **Aula 9**
### The Abstract Factory Design Pattern

Mais dinâmica e genérica do que a Factory e você só criará uma Abstract Factory caso a primeira esteja com a lógica muito complicada, engessada e/ou seja necessário adicionar mais funcionalidades.  
No exemplo de [Abstract Factory Design Pattern](./abstract-factory-design-pattern/index.html) criamos uma função e atribuímos o método `create` à um `prototype` de `redCircle` e 
`blueCircle`, essa abstração permite o registro de múltiplos `types` de objetos e permite verificar quais são classes válidas `if (cls.prototype.create)` para criar itens.  
Ainda sem certeza de onde utilizar isso 🤷‍♂️



