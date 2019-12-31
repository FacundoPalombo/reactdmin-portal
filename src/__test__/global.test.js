const debug = require('debug')('dev:jest')

test('Strings', () => {
  expect('hola').toMatch('hola')
})

afterAll(() => console.log('Tests finished'))
