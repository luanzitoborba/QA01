const test = require('tape')
const index = require ('./index')

test('teste1', (t) =>{
    t.assert(index.aplicarDesconto(10,5)===5,
    "Descontou corretamente")
    t.end()
})

test('teste2', (t) =>{
    t.assert(index.aplicarDesconto(5,2)===0,
    "Descontou corretamente")
    t.end()
})

test('teste3', (t) =>{
    t.assert(index.aplicarDesconto(8,2)===6,
    "Descontou corretamente")
    t.end()
})

test('teste4', (t) =>{
    t.assert(index.aplicarDesconto(8,2)===6,
    "Descontou corretamente")
    t.end()
})

test('teste5', (t) =>{
    t.assert(index.aplicarDesconto(20,5)===15,
    "Descontou corretamente")
    t.end()
})

test('teste6', (t) =>{
    t.assert(index.aplicarDesconto(33,7)===25,
    "Descontou corretamente")
    t.end()
})

test('teste7', (t) =>{
    t.assert(index.aplicarDesconto(3,2)===1,
    "Descontou corretamente")
    t.end()
})


test('teste8', (t) =>{
    t.assert(index.aplicarDesconto(53,2)===51,
    "Descontou corretamente")
    t.end()
})

test('teste9', (t) =>{
    t.assert(index.aplicarDesconto(6834,2034)===4474,
    "Descontou corretamente")
    t.end()
})

test('teste10', (t) =>{
    t.assert(index.aplicarDesconto(64,20)===44,
    "Descontou corretamente")
    t.end()
})

test('teste11', (t) =>{
    t.assert(index.aplicarDesconto(48,10)===12,
    "Descontou corretamente")
    t.end()
})

test('teste12', (t) =>{
    t.assert(index.aplicarDesconto(30,20)===10,
    "Descontou corretamente")
    t.end()
})