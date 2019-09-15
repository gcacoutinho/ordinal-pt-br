# Biblioteca simples para transformar numeros cardinais em ordinais

## Exemplo de uso
```
require("ordinal-pt-br")

let posicaoAtleta = 53

console.log(`A atleta ficou em ${posicao.toOrdinal({ genero: "a" })}.`)

let posicaoPiloto = 3

console.log(`O piloto chegou em ${posicaoPiloto.toOrdinal()} lugar!`)

let numIncendios = 173

console.log(`${numIncendios.toOrdinal({ maiuscula: true })} incêndio que acontece apenas este mês.`)
```