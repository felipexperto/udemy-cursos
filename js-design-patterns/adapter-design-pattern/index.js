/*
  interface ANTIGA:
  Retorna somente um método chamado REQUEST
  Recebendo CEP fictício do remetente, destinatário e peso da mercadoria
*/
function Shipping() {
  this.request = function(zipStart, zipEnd, weight) {
    const distance = zipEnd - zipStart;
    let value = 0;
    /*
      SE a distancia entre CEPs for MENOR que 10
      E peso MENOR 5
      ENTAO frete gratis
      SE NAO o valor é 100
    */
    if (distance < 10 && weight < 5) {
      value = "Free shipping"
    } else {
      value = 100; 
    }
    return value;
  }
}


/*
  interface NOVA:
  Possui um método de autenticação chamado LOGIN
  Deve dar 10% de desconto em todos os pedidos segundo regra de negócio
*/
function AdvancedShipping() {
  // se não for passado um objeto
  // com chave "token" e valor em string
  // responde com erro
  this.login = function(credentials) { 
    if (!credentials) throw new Error('Missing credentials');
    if (!credentials.token) throw new Error('Missing credentials');
    if (typeof credentials.token !== 'string' ) throw new Error('Authentication token should be a string');
  };
  this.discount = function(price) {
    // se o `type` de `price` for diferente de number
    // quer dizer que é frete grátis
    // então retorna sem aplicar desconto
    if (typeof price !== 'number') return price;
    // caso contrário, aplica desconto
    return price - (price * 0.1);
  }
}


/*
  ADAPTER
  Usa uma instância de `AdvancedShipping` para:
  Fazer login e aplicar desconto

  Usa uma instância de `Shipping` para:
  Obter o método que calcula frete.
  
  O Adapter faz a união dos dois
  assim você não altera a classe original `Shipping`
  nem replica o método de cálculo original (`request` dentro de `Shipping`) no `AdvancedShipping`
  TENDEU?

  SE o Prototype Design Pattern tivesse sido usado
  no momento de criação do Shipping, isso não seria necessário.
  Mas a vida é o que ela é, não é mesmo?
*/
function ShippingAdapter(credentials) {
  const newShipping = new AdvancedShipping();
  newShipping.login(credentials);
  
  const oldShipping = new Shipping();
  
  return {
    request: function(zipStart, zipEnd, weight) {
      const regularShippingPrice = oldShipping.request(zipStart, zipEnd, weight);
      const discountedShipping = newShipping.discount(regularShippingPrice);
      return discountedShipping;
    }
  };
}

function run() {
  // interface antiga continua funcionando
  // e pode ser utilizada normalmente
  const shipping = new Shipping();
  let cost = shipping.request(1, 5, 10);
  console.log("Old cost: " + cost);
  
  
  // nova interface
  const credentials = {token: "30a8-6ee1"};
  const adapter = new ShippingAdapter(credentials);
  cost = adapter.request(1, 5, 10);
  
  console.log("New cost: " + cost);
}

run();