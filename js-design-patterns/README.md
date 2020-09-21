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

> Obs: `Método` é somente uma nomenclatura dada pra uma função dentro de um objeto ou dentro de outra função.

---

## **Aula 5**
### Module Reveal Pattern









