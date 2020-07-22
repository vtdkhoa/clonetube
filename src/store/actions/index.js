import * as types from '../constants'

export const createRequestTypes = base => {
  if (!base) {
    throw new Error('Cannot create request type with base = \'\' or base = null')
  }

  return [types.REQUEST, types.SUCCESS, types.FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const createAction = (type, payload = {}) => {
  return {
    type,
    ...payload
  }
}