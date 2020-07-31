import { fork, take, all, call, put } from 'redux-saga/effects'
import * as watchActions from '../actions/watch'
import { REQUEST } from '../constants'
import { buildVideoDetailRequest, buildRelatedVideosRequest } from '../api/youtube-api'
import { SEARCH_LIST_RESPONSE } from '../api/youtube-response-types'

/***********
 * ACTIONS *
 ***********
 */
export function* fetchWatchDetails(videoId) {
  let requests = [
    buildVideoDetailRequest.bind(null, videoId),
    buildRelatedVideosRequest.bind(null, videoId)
  ]

  try {
    const responses = yield all(requests.map(fn => call(fn)))
    yield put(watchActions.details.success(responses))
    yield call(fetchVideoDetails, responses)
  } catch (error) {
    yield put(watchActions.details.failure(error))
  }
}

export function* fetchVideoDetails(responses) {
  const searchListResponse = responses.find(
    response => response.result.kind === SEARCH_LIST_RESPONSE
  )
  const relatedVideoIds = searchListResponse.result.items.map(
    relatedVideo => relatedVideo.id.videoId
  )
  const requests = relatedVideoIds.map(relatedVideoId => {
    return buildVideoDetailRequest.bind(null, relatedVideoId)
  })

  try {
    const responses = yield all(requests.map(fn => call(fn)))
    yield put(watchActions.videoDetails.success(responses))
  } catch (error) {
    yield put(watchActions.videoDetails.failure(error))
  }
}

/************
 * WATCHERS *
 ************
 */
export function* watchWatchDetails() {
  while (true) {
    const { videoId } = yield take(watchActions.WATCH_DETAILS[REQUEST])
    yield fork(fetchWatchDetails, videoId)
  }
}