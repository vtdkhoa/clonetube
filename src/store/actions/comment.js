import { createAction, createRequestTypes } from '.'
import * as types from '../constants'

export const COMMENT_THREADS = createRequestTypes('COMMENT_THREADS')
export const threads = {
  request: (videoId, nextPageToken) => createAction(
    COMMENT_THREADS[types.REQUEST],
    { videoId, nextPageToken }
  ),
  success: (response, videoId) => createAction(
    COMMENT_THREADS[types.SUCCESS],
    { response, videoId }
  ),
  failure: response => createAction(COMMENT_THREADS[types.FAILURE], { response })
}