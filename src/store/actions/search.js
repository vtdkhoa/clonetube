import { createAction, createRequestTypes } from '.'
import * as types from '../constants'

export const SEARCH_FOR_VIDEOS = createRequestTypes('SEARCH_FOR_VIDEOS')
export const forVideos = {
  request: (searchQuery, nextPageToken, amount) => createAction(
    SEARCH_FOR_VIDEOS[types.REQUEST],
    { searchQuery, nextPageToken, amount }
  ),
  success: (response, searchQuery) => createAction(
    SEARCH_FOR_VIDEOS[types.SUCCESS],
    { response, searchQuery }
  ),
  failure: (response, searchQuery) => createAction(
    SEARCH_FOR_VIDEOS[types.FAILURE],
    { response, searchQuery }
  )
}