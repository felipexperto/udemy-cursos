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

  function redCircleBuilder() {
    this.item = new shapeBuilder('circle');
    this.init();
  }
  redCircleBuilder.prototype.init = function() { return this.item.color('red'); }
  redCircleBuilder.prototype.get  = function() { return this.item; }

  function blueSquareBuilder() {
    this.item = new shapeBuilder('square');
    this.init();
  }
  blueSquareBuilder.prototype.init = function() { return this.item.color('blue'); }
  blueSquareBuilder.prototype.get  = function() { return this.item; }

  
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
        _cf.register('blue', blueSquareBuilder);
        return _cf;
      }


      // vamos criar um eventlistener de click
      document.addEventListener('click', e => {


        const cg = ShapeGeneratorSingleton.getInstance(circleFactoryInstance);
        // atribuindo uma instância do singleton na variavel `cg`
        // caso uma instancia não exista, `getInstance` vai chamar `init`
        // `init` vai criar a instancia com todos seus métodos


        const shape = cg.createShape(e.pageX, e.pageY, 'red');
        /*
          criando um item com o método createShape(), que recebe (left, top, type)
          `createShape()` chama `currentFactory.create(type)`, sendo `type` = 'red'
          `currentFactory` é igual a factory passada por parâmetro, ou seja, `circleFactoryInstance`
          `circleFactoryInstance` é um método que está sendo executado e retorna o objeto `_cf`
          
          `_cf` é baseado no `shapeFactory` portanto quando é retornado contém o seguinte formato:

            {
              create: f(type),
              register: f(type, cls),
              types: {red: f}
            }

          isso permite que o método `create()` seja disparado logo em seguida.
          ele dispara `redCircleBuilder.prototype.get` ( `return new this.types[type]().get()` )
          que por sua vez retorna o `redCircleBuilder`,
          que cria um objeto baseado no `shapeBuilder`
          e depois dispara o método `init` que insere a cor 'red'
          e por último adiciona coordenadas com o método `shape.move` e retorna;

        */

        
        cg.addShapeToArray(shape);
        // adicionando no array de itens com addShapeToArray()


        console.log(cg.getArrayOfShapesNumberOfItems(), cg.getArrayOfShapes());
        // exibindo no console
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