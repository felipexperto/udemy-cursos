(function() {

  /*
    Iniciando singleton
  */
  const CircleGeneratorSingleton = (function() {
    let instance;

    function init() {
      const arrayOfShapes = [];

      const _position = (circle, left, top) => {
        circle.left = left;
        circle.top = top;
      };
      const create = (left, top) => {
        const circle = { shape: 'circle' };
        _position(circle, left, top)
        return circle;
      }

      const addShapeToArray = (shape) => arrayOfShapes.push(shape);

      const getArrayOfShapes = () => arrayOfShapes;
      const getArrayOfShapesNumberOfItems = () => arrayOfShapes.length

      return {
        create,
        addShapeToArray,
        getArrayOfShapes,
        getArrayOfShapesNumberOfItems,
      };
    }

    return {
      getInstance: function() {
        if (!instance) instance = init();
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

      // vamos criar um eventlistener de click
      document.addEventListener('click', e => {
        // atribuindo uma instância do singleton na variavel cg
        const cg = CircleGeneratorSingleton.getInstance();
        // criando um item com o método create()
        const circle = cg.create(e.pageX, e.pageY);
        // adicionando no array de itens com addShapeToArray()
        cg.addShapeToArray(circle);
        // exibindo no console
        console.log(cg.getArrayOfShapesNumberOfItems(), cg.getArrayOfShapes());
      });

      // agora vamos criar um eventlistener de pressionar a tecla "c"
      document.addEventListener('keypress', e => {
        if (e.key === 'c') {
          // vamos tentar iniciar a instância novamente
          const cg = CircleGeneratorSingleton.getInstance();
          // passando um posicionamento aleatório dessa vez
          const circle = cg.create(Math.round(Math.random()*200), Math.round(Math.random()*200));
          // adicionando no array de itens com addShapeToArray() como de costume
          cg.addShapeToArray(circle);
          // exibindo no console
          // veja que nosso array pode receber um objeto via 'click' e 'keypress'
          // isso acontece porque ambas as variáveis 'cg' 
          // estão apontando para a mesma instância de 'CircleGeneratorSingleton'
          console.log(cg.getArrayOfShapesNumberOfItems(), cg.getArrayOfShapes());
        }
      });
    }
  });

})();