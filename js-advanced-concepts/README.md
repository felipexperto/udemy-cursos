# Javascript Foundation

## Javascript Engine

Como é possível escrever em Javascript e a máquina entender o que fazer?  
Isso é o trabalho executado pela Javascript Engine, basicamente um tradutor.

## E existem várias Javascript Engines?

Sim, existem. [Clique aqui e veja uma lista](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines).

## E por que as pessoas criam/programam essas engines?

Basicamente para melhorar a performance de Javascript nos browsers e servidores.  
Um ponto histórico é o surgimento do Google Maps que necessitava (e ainda necessita) de grande processamento pelo grande conjunto de funcionalidades (mudança de tema, exibição de labels, zoom, carregamento assíncrono, entre outros ) e, isso fez com que a Google criasse sua própria Engine para o Chrome, chamada de V8 Engine (desenvolvida em C++), ou seja, o fato das engines serem muito básicas até aquele momento (entregando uma performance lenta) para atender a necessidade do Google Maps impulsionou a criação.

## E quem criou a primeira Engine?

O inventor do Javascript, Brendan Eich.

## E como funciona?

Você escreve um arquivo em JS e a primeira coisa que acontece é uma análise léxica que quebra o código em `Tokens` para identificar seu sgnificado. E o conjunto desses tokens formam uma estrutura que chamamos de `Abstract Syntax Tree`. Se você acessar o site [astexplorer](https://astexplorer.net/) é possível simular esse processo.

Essa estrutura é enviada para um Interpretador que transformará o código em algo intendível para o computador.

## Interpreters vs Compilers

Uma linguagem de programação só pode ser interpretada ou compilada.
Interpretadores leêm linha por linha *on-the-fly*, ou seja, em tempo de execução, retorna `Bytecode` e executa.
Enquanto isso, compiladores podem retornar outra linguagem, por exemplo, `machine code` para o CPU e, este executar os comandos.


 