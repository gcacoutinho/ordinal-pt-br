## Biblioteca simples para transformar numeros cardinais em ordinais

### Para usar em seu projeto basta instalá-la via npm
- `npm install ordinal-pt-br --save` ou apenas `npm i ordinal-pt-br`

E se quiser ver a página, [aqui está ela](https://www.npmjs.com/package/ordinal-pt-br)

### Exemplo de uso
```node
require("ordinal-pt-br")

let posicaoAtleta = 53
console.log(`A atleta ficou em ${posicao.toOrdinal({ genero: "a" })} lugar.`)
// Printa "A atleta ficou em quinquagésimo segundo lugar."

let posicaoPiloto = 3
console.log(`O piloto chegou em ${posicaoPiloto.toOrdinal()} lugar!`)
// Printa "O piloto chegou em terceiro lugar!"

let numIncendios = 173
console.log(`${numIncendios.toOrdinal({ maiuscula: true })} incêndio que acontece apenas este mês.`)
// Printa "Centésimo Septuagésimo Terceiro incêndio que acontece apenas este mês."
```
