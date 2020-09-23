const funcaoModulo = (function () {

  const _mensagemDeErro = 'Erro!',
        mensagemDeSucesso = 'Sucesso!';

  function _metodoPrivado() {
    return 'Você executou o método privado';
  }
  function _exibeMensagemDeErro() {
    return _mensagemDeErro;
  }

  function metodoPublico() {
    return 'Você executou o método público';
  }
  function exibeMensagemDeSucesso() {
    return mensagemDeSucesso;
  }

  return {
    metodoPublico,
    exibeMensagemDeSucesso,
    mensagemDeSucesso
  }
})();

/*
  Aqui estão os métodos públicos e a variável (sem underline)
  que exportamos no `return {}` e que funcionam perfeitamente
*/
console.table([
  funcaoModulo.metodoPublico(),
  funcaoModulo.exibeMensagemDeSucesso(),
  funcaoModulo.mensagemDeSucesso
]);


/*
  Aqui estão os métodos privados (com underline) e inacessíveis
  Ao tirar o comentário de algum deles, um erro acontecerá.
*/
// funcaoModulo._metodoPrivado();
// funcaoModulo._exibeMensagemDeErro();
// console.log('Console.log: '+ funcaoModulo._mensagemDeErro);


/*
  Detalhe estranho: O instrutor alega que os métodos públicos não podem
  ser modificados de fora da função MAS não é o que acontece...🤷
*/
// Imprimindo o código original do método `metodoPublico`
console.table([funcaoModulo.metodoPublico.toString()]);
// Alterando o conteúdo do método
funcaoModulo.metodoPublico = () => console.log('AAAAAAAAAA');
// Imprimindo novamente
console.table([funcaoModulo.metodoPublico.toString()]);
