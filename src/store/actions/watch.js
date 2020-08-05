import { createAction, createRequestTypes } from '.'
import * as types from '../constants'

export const WATCH_DETAILS = createRequestTypes('WATCH_DETAILS')
export const details = {
  request: (videoId, channelId) => createAction(WATCH_DETAILS[types.REQUEST], { videoId, channelId }),
  success: response => createAction(WATCH_DETAILS[types.SUCCESS], { response }),
  failure: response => createAction(WATCH_DETAILS[types.FAILURE], { response })
}

export const VIDEO_DETAILS = createRequestTypes('VIDEO_DETAILS')
export const videoDetails = {
  request: () => {
    throw Error('Not implemented')
  },
  success: response => createAction(VIDEO_DETAILS[types.SUCCESS], { response }),
  failure: response => createAction(VIDEO_DETAILS[types.FAILURE], { response })
}