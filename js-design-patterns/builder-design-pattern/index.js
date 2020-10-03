(function() {
  /*
    Iniciando o builder
  */
  function Circle() {
    this.item = { shape: 'circle', color: 'red' };
  }
  Circle.prototype.move = function(circle, left, top) {
    circle.item.left = left;
    circle.item.top = top;
  }
  Circle.prototype.color = function(clr) {
    this.item = { ...this.item, color: clr };
  }
  Circle.prototype.get = function () {
    return this.item;
  }

  function redCircleBuilder() {
    this.item = new Circle();
    this.init();
  }
  redCircleBuilder.prototype.init = function() {
    // não faz absolutamente nada
  }
  redCircleBuilder.prototype.get = function() {
    return this.item;
  }


  function blueCircleBuilder() {
    this.item = new Circle();
    this.init();
  }
  blueCircleBuilder.prototype.init = function() {
    this.item.color('blue');
  }
  blueCircleBuilder.prototype.get = function() {
    return this.item;
  }

  
  function circleFactory() {
    this.types = {};
    this.create = function(type) {
      return new this.types[type]().get();
    };
    this.register = function(type, cls) {
      if (cls.prototype.init && cls.prototype.get) {
        this.types[type] = cls;
      }
    }
  }

  /*
    Iniciando a singleton
  */
  const CircleGeneratorSingleton = (function() {
    let instance;

    function init() {
      const _arrayOfShapes = [],
            _cf = new circleFactory();
            _cf.register('red', redCircleBuilder);
            _cf.register('blue', blueCircleBuilder);

      const create = (left, top, type) => {
        const circle = _cf.create(type);
        circle.move(circle, left, top)
        return circle;
      }

      const addShapeToArray = (shape) => _arrayOfShapes.push(shape);

      const getArrayOfShapes = () => _arrayOfShapes;
      const getArrayOfShapesNumberOfItems = () => _arrayOfShapes.length

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
        const circle = cg.create(e.pageX, e.pageY, 'red');
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
          const circle = cg.create(Math.round(Math.random()*200), Math.round(Math.random()*200), 'blue');
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