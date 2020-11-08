const printer = (function() {
  let instance;

  function create() {
    function print() {
      console.log('Imprimindo documento');
    }
    function turnOn() {
      console.log('Ligando impressora');
    }
    return { print, turnOn };
  }
  return {
    getInstance: function() {
      if (!instance) instance = create();
      return instance;
    }
  }
})();


/*
  Testando utilização do singleton
*/

// eventlistener para 'ouvir' as etapas de carregamento da página
document.addEventListener('readystatechange', e => {

  // se o carregamento da página estiver completo
  if (e.target.readyState === 'complete') {

    // criando duas instâncias a partir de `printer`
    const printer01 = printer.getInstance();
    const printer02 = printer.getInstance();

    // limpando console
    console.clear();
    // executando método turnOn da primeira instância
    printer01.turnOn();
    // exibindo objeto e seus métodos
    console.log('Objeto', printer01);
    // conferindo se as instâncias são idênticas
    console.log('Printer01 é igual a Printer02?', printer01 === printer02);
  }
});
