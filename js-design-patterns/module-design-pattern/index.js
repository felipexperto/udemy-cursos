const funcaoModulo = (function () {

  const mensagemDeErro = 'Erro!',
        mensagemDeSucesso = 'Sucesso!';

  function metodoPrivado() {
    console.log('Você executou o método privado');
  }

  function exibeMensagemDeErro() {
    console.log(mensagemDeErro);
  }

  return {
    metodoPublico: () => console.log('Você executou o método público'),
    exibeMensagemDeSucesso: function() {
      console.log(mensagemDeSucesso);
    },
  }

})();

/*
  Métodos que foram retornados pela `funcaoModulo`,
  ou seja, estão dentro do `return {}`
  e por isso podem ser executados no escopo global
*/
funcaoModulo.metodoPublico();
funcaoModulo.exibeMensagemDeSucesso();

/*
  Segura esse `funcaoModulo.metodoPrivado is not a function` haha
  Isso acontece porque o método foi criado dentro da `funcaoModulo`
  mas não foi exportada/retornada `return {}`.
  Também aconteceria um erro se tentássemos executar a
  funcaoModulo.exibeMensagemDeErro()
*/
funcaoModulo.metodoPrivado();

/*
  As constantes mensagemDeErro e `mensagemDeSucesso`
  também não poderão ser acessadas.

  Esse conceito de módulo é basicamente como o React
  lida com seus componentes. Se você quer entender React,
  entenda isso primeiro.

  Depois procure um pouco sobre Classes no Javascript:
  https://blog.schoolofnet.com/tudo-o-que-voce-precisa-saber-sobre-classes-no-javascript/

  Depois um pouquinho de Import e Export:
  https://www.maujor.com/tutorial/react-export-import-defaults.php

  E por fim, Class Component vs Functional Component no React:
  https://medium.com/wesionary-team/react-functional-components-vs-class-components-86a2d2821a22

  E seja feliz :)
*/


/*
  Observação...

  Isso é uma arrow function:

    metodoAcessivelGlobalmente: () => console.log('Você executou o método público')

  E é só uma sintaxe diferente para dizer isso:

    metodoAcessivelGlobalmente: function() {
      console.log('Você executou o método público');
    }
*/