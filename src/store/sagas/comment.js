import { fork, take } from 'redux-saga/effects'
import * as api from '../api/youtube-api'
import * as commentActions from '../actions/comment'
import { REQUEST } from '../constants'
import { fetchEntity } from '.'

/***********
 * ACTIONS *
 ***********
 */
export function* fetchCommentThread(videoId, nextPageToken) {
  const request = api.buildCommentThreadRequest.bind(null, videoId, nextPageToken)
  yield fetchEntity(request, commentActions.threads, videoId)
}

/************
 * WATCHERS *
 ************
 */
export function* watchCommentThread() {
  while (true) {
    const { videoId, nextPageToken } = yield take(commentActions.COMMENT_THREADS[REQUEST])
    yield fork(fetchCommentThread, videoId, nextPageToken)
  }
}