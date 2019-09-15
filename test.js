const assert = require('assert');
require('./index')

// Testes com 1 algarismo
let teste1 = 4
assert.equal(teste1.toOrdinal(), 'quarto')
assert.equal(teste1.toOrdinal({ genero: "a" }), 'quarta')
assert.equal(teste1.toOrdinal({ maiuscula: true }), 'Quarto')
assert.equal(teste1.toOrdinal({ genero: "a", maiuscula: true }), 'Quarta')

// Testes com 2 algarismos
let teste2 = 57
assert.equal(teste2.toOrdinal(), 'quinquagésimo sétimo')
assert.equal(teste2.toOrdinal({ genero: "a" }), 'quinquagésima sétima')
assert.equal(teste2.toOrdinal({ maiuscula: true }), 'Quinquagésimo Sétimo')
assert.equal(teste2.toOrdinal({ genero: "a", maiuscula: true }), 'Quinquagésima Sétima')

// Testes com 3 algarismos
let teste3 = 123
assert.equal(teste3.toOrdinal(), 'centésimo vigésimo terceiro')
assert.equal(teste3.toOrdinal({ genero: "a" }), 'centésima vigésima terceira')
assert.equal(teste3.toOrdinal({ maiuscula: true }), 'Centésimo Vigésimo Terceiro')
assert.equal(teste3.toOrdinal({ genero: "a", maiuscula: true }), 'Centésima Vigésima Terceira')

// Teste de erros
let testeNeg = -1
assert.throws(() => { testeNeg.toOrdinal() }, Error)

let teste1000 = 1000
assert.throws(() => { teste1000.toOrdinal() }, Error)

let testeFloat = 1.2
assert.throws(() => { testeFloat.toOrdinal() }, Error)