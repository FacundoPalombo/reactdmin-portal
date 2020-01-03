import { HolaMundo } from '../components/HolaMundo'

test('Strings', () => {
  expect('hola').toMatch('hola')
})

afterAll(() => console.log('Tests finished'))
