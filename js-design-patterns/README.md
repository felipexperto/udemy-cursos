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








