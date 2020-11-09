# **Curso de Google Tag Manager e Analytics**

> Nome e produtores não serão citados.
> Nem conteúdo na íntegra será escrito neste repositório.


# **Conceitos**

## **GTM**

Uma ferramenta que age como um intermediário entre seu site e ferramentas de terceiros (Google Analytics, Hotjar, Facebook Pixel, etc). Você pode concentrar todos os scripts nele e escolher quando dispará-los.

Ao acessar o serviço com sua conta do Google é possível criar uma conta do GTM, por exemplo, se você tem clientes, cada conta representaria uma empresa. E dentro destas contas existem containers sendo que o plano gratuito permite criar até três deles.

Para que o GTM funcione em seu site é necessário adicionar um bloco de código Javascript em seu site que será automaticamente disparado no momento do carregamento da página. Esse bloco de código é exibido para você assim que criar um contêiner ou acessando a opção `Administrador > Instalar o Gerenciador de tags do Google`.


## **Tags (etiquetas), Triggers (acionadores) e Variables (variáveis)**

- `Tags` (o quê) são pedaços de código que fazem algo, por exemplo, trackear uma página, enviar um evento para o Google Analytics ou plataformas de terceiros;
- `Trigger` (quando) é uma condição de quando uma tag deve ser disparada;
- `Variáveis` (o que/como/onde) são pequenos pedaços de informação que podem ser reutilizados em tags e gatilhos;


## **Variables (variáveis) em detalhes**

No painel lateral do GTM existe a opção `Variáveis` onde temos as `variáveis incorporadas` que permitem captar dados da página ao interagir com a mesma sem necessidade de código. Você pode ver todas elas clicando no botão `Configurar` e ativar as que lhe fazem sentido.

Por exemplo, `Click Text` é uma variável incorporada que permite captar o texto do elemento num evento de clique.  
Você pode criar uma tag, escolher o modelo `Google Analytics: Universal Analytics` e adicionar no rótulo (por exemplo) a variável, escrevendo: `{{Click Text}}`.


## **Triggers (acionadores) em detalhes**

No painel lateral do GTM existe a opção `Acionadores` que exibe uma lista vazia ao criar o container.  
Ao clicar no botão de Adicionar um novo acionador, uma tela é aberta e a primeira ação é escolher o `tipo de acionador`.  
A nomenclatura - pelo menos pra mim - causou estranheza no início mas faz total sentido ter um `tipo` dentro do seu acionador pois existem diversos contextos onde podem ser aplicados.


## **Datalayer**

Uma camada "invisível" onde informações importantes sobre a página, compra ou interação é armazenada.  
Ele pode receber informação de diversos modos e o GTM pode ser configurado para pegar essas informações do dataLayer e enviar para o Google Analytics, Google Ads ou algum outro.

![Fluxo de informações para o dataLayer](./01-fluxo.png)

Um possível cenário é o abaixo, onde ocorre uma interação, um Auto Event Listener está escutando, envia para o dataLayer e, então o GTM pega essa informação e passa para alguma ferramenta, GA, por exemplo.

![Fluxo de evento](./02-fluxo.png)


# **Até onde entendi sobre dataLayer...** 🤔

Para que ele funcione adequadamente, você deve:

- Criar uma ou mais `Variáveis de camada de dados`;  
Exemplo: Três variáveis cujos nomes são `eventCategory`, `eventAction` e `eventLabel`

- Linkar essas variáveis numa tag de evento `Universal Analytics`;  
Exemplo: Criar uma tag chamada `interaction` com `eventCategory` no campo "Categoria", `eventAction` no campo "Ação" e `eventLabel` no campo "Rótulo"

- Adicionar um acionador na tag que será um `Evento personalizado`;  
Exemplo: Um evento chamado `interaction` e é disparado por `Todos os eventos personalizados`

- E finalmente podemos disparar o evento via código.  
```
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'interaction',
  'eventCategory': 'cadastro:candidato',
  'eventAction': 'clicou:[[cta-texto]]',
  'eventLabel': '[[idioma]]',
  'eventValue': 0,
});
```


