import { createAction, createRequestTypes } from '.'
import * as types from '../constants'

export const MOST_POPULAR = createRequestTypes('MOST_POPULAR')
export const mostPopular = {
  request: (amount, loadDescription, nextPageToken) => createAction(
    MOST_POPULAR[types.REQUEST], { amount, loadDescription, nextPageToken }
  ),
  success: response => createAction(MOST_POPULAR[types.SUCCESS], { response }),
  failure: response => createAction(MOST_POPULAR[types.FAILURE], { response })
}