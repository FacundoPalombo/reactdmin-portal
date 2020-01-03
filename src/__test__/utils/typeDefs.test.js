import typeDefs from '../../utils/typeDefs'

test('Should format the actions without reducers', () => {
  const mockActions = {
    action1: 'action1',
    action2: 'action2'
  }
  expect(typeDefs('mockActions', mockActions)).toBe({ action1: 'mockActions:action1', action2: 'mockActions:action2' })
})
test('Should format the actions with reducers', () => {
  const mockActions = {
    action1: 'action1',
    action2: 'action2'
  }
  expect(typeDefs('mockActions', mockActions, 'reducer')).toBe({ action1: 'mockActions:action1--reducer', action2: 'mockActions:action2--reducer' })
})
