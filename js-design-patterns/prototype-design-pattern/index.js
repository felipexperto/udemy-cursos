(function() {
 
  function shapeBuilder(shape) {
    this.item = { shape };
  }
  shapeBuilder.prototype.move = function(shape, left, top) {
    shape.item.left = left;
    shape.item.top = top;
  }
  shapeBuilder.prototype.color = function(clr) { return this.item = { ...this.item, color: clr } };
  shapeBuilder.prototype.get   = function() { return this.item; }

  function shapeFactory() {
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
    Função que clona os protótipos de um objeto para outro
  */
  function clone(src, out) {
    for (let attr in src.prototype) {
      out.prototype[attr] = src.prototype[attr]
    }
  }

  /*
    Criando o PRIMEIRO objeto
  */
  function redCircleBuilder() {
    this.item = new shapeBuilder('circle');
    this.init();
  }
  /*
    Criando seus prototypes
  */
  redCircleBuilder.prototype.init = function() { return this.item.color('red'); }
  redCircleBuilder.prototype.get  = function() { return this.item; }

  /*
    Criando o SEGUNDO objeto
  */
  function redSquareBuilder() {
    this.item = new shapeBuilder('square');
    this.init();
  } 
  
  /*
    Ao invés de declarar tudo novamente (abaixo), vamos usar o clone()
    para pegar os métodos declarados em prototype;
  
    redSquareBuilder.prototype.init = function() { return this.item.color('blue'); }
    redSquareBuilder.prototype.get  = function() { return this.item; }
  */
  clone(redCircleBuilder, redSquareBuilder);
  


  /*
    Iniciando a singleton
  */
  const ShapeGeneratorSingleton = (function() {
    let instance;
    let currentFactory;

    function setNewFactory(factory) {
      return currentFactory = factory();
    }

    function init(factory) {
      const _arrayOfShapes = [];
            currentFactory = factory();

      const createShape = (left, top, type) => {
        const shape = currentFactory.create(type);
        shape.move(shape, left, top)
        return shape;
      }

      const addShapeToArray = (shape) => _arrayOfShapes.push(shape);
      const getArrayOfShapes = () => _arrayOfShapes;
      const getArrayOfShapesNumberOfItems = () => _arrayOfShapes.length;

      return {
        createShape,
        addShapeToArray,
        getArrayOfShapes,
        getArrayOfShapesNumberOfItems,
      };
    }

    return {
      getInstance: function(factory) {
        if (!instance)
          instance = init(factory);
        else
          setNewFactory(factory);

        return instance;
      }
    }
  })();

  /*
    Testando utilização
  */

  // eventlistener para 'ouvir' as etapas de carregamento da página
  document.addEventListener('readystatechange', e => {

    // se o carregamento da página estiver completo...
    if (e.target.readyState === 'complete') {


      // criando instancia de shapeFactory
      const circleFactoryInstance = () => {
        const _cf = new shapeFactory();
        _cf.register('red', redCircleBuilder);
        return _cf;
      }
      // criando outra instancia de shapeFactory
      const squareFactoryInstance = () => {
        const _cf = new shapeFactory();
        _cf.register('blue', redSquareBuilder);
        return _cf;
      }


      // vamos criar um eventlistener de click
      document.addEventListener('click', e => {

        const cg = ShapeGeneratorSingleton.getInstance(circleFactoryInstance);
        const shape = cg.createShape(e.pageX, e.pageY, 'red');
        cg.addShapeToArray(shape);
        console.log(cg.getArrayOfShapesNumberOfItems(), cg.getArrayOfShapes());
      });

      // agora vamos criar um eventlistener de pressionar a tecla "c"
      document.addEventListener('keypress', e => {
        if (e.key === 'c') {
          const cg = ShapeGeneratorSingleton.getInstance(squareFactoryInstance);
          const shape = cg.createShape(Math.round(Math.random()*200), Math.round(Math.random()*200), 'blue');
          cg.addShapeToArray(shape);
          console.log(cg.getArrayOfShapesNumberOfItems(), cg.getArrayOfShapes());
        }
      });
    }
  });

})();