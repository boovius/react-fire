const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('result', result)
  console.log('nextState', store.getState())
  return result
}

export default logger
