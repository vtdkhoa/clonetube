import { createAction, createRequestTypes } from '.'
import * as types from '../constants'

export const MOST_POPULAR = createRequestTypes('MOST_POPULAR')
export const mostPopular = {
  request: (amount, loadDescription, nextPageToken) => createAction(
    MOST_POPULAR[types.REQUEST],
    { amount, loadDescription, nextPageToken }
  ),
  success: response => createAction(MOST_POPULAR[types.SUCCESS], { response }),
  failure: response => createAction(MOST_POPULAR[types.FAILURE], { response })
}

export const VIDEO_CATEGORIES = createRequestTypes('VIDEO_CATEGORIES')
export const categories = {
  request: () => createAction(VIDEO_CATEGORIES[types.REQUEST]),
  success: response => createAction(VIDEO_CATEGORIES[types.SUCCESS], { response }),
  failure: response => createAction(VIDEO_CATEGORIES[types.FAILURE], { response })
}

export const MOST_POPULAR_BY_CATEGORY = createRequestTypes('MOST_POPULAR_BY_CATEGORY')
export const mostPopularByCategory = {
  request: categories => createAction(MOST_POPULAR_BY_CATEGORY[types.REQUEST], { categories }),
  success: (response, categories) => createAction(
    MOST_POPULAR_BY_CATEGORY[types.SUCCESS],
    { response, categories }
  ),
  failure: response => createAction(MOST_POPULAR_BY_CATEGORY[types.FAILURE], { response })
}