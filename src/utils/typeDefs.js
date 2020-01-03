/**
 * @function typeDefs
 * @return Format the redux type with the pattern: action:type--reducer or action:type if reducer is not received
 */
export default (action, types, reducer = null) => {
  const typesFormatted = {}
  if (reducer) {
    for (let t of types) {
      typeFormatted = `${action}:${t}--${reducer}`
      typesFormatted = { ...typesFormatted, typeFormatted }
    }
  } else {
    for (let t of types) {
      typeFormatted = `${action}:${t}`
      typesFormatted = { ...typesFormatted, typeFormatted }
    }
  }
  return typesFormatted
}
