const Mortgage = function(name) {
  this.name = name;
}

Mortgage.prototype = {

  applyFor: function(amount) {
      // access multiple subsystems...
      let result = "APROVADO";
      if (!new Bank().verify(this.name, amount)) {
          result = "REJEITADO";
      } else if (!new Credit().get(this.name)) {
          result = "REJEITADO";
      } else if (!new Background().check(this.name)) {
          result = "REJEITADO";
      }
      return this.name + " teve seu pedido de financiamento " + result +
             " no valor de " + amount;
  }
}

const Bank = function() {
  this.verify = function(name, amount) {
      // acessando o banco de dados do "Banco Ibáu"
      // conferindo se o usuário é o "João Devedor"
      // se for, pedido negado
      return (name === 'João Devedor') ? false : true;
  }
}

const Credit = function() {
  this.get = function(name) {
      // complex logic ...
      return true;
  }
}

const Background = function() {
  this.check = function(name) {
      // complex logic ...
      return true;
  }
}

const run = (function () {
  const mortgage = new Mortgage("Zé Ninguém");
  const result = mortgage.applyFor("R$ 100.000");
  console.log(result);

  const mortgage2 = new Mortgage("João Devedor");
  const result2 = mortgage2.applyFor("R$ 200");
  console.log(result2);

})();