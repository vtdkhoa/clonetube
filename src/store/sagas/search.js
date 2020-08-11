import { fork, take } from 'redux-saga/effects'
import * as searchActions from '../actions/search'
import * as api from '../api/youtube-api'
import { REQUEST } from '../constants'
import { fetchEntity } from '.'

/***********
 * ACTIONS *
 ***********
 */
export function* searchForVideos(searchQuery, nextPageToken, amount) {
  const request = api.buildSearchRequest.bind(null, searchQuery, nextPageToken, amount)
  yield fetchEntity(request, searchActions.forVideos, searchQuery)
}

/************
 * WATCHERS *
 ************
 */
export function* watchSearchForVideos() {
  while (true) {
    const { searchQuery, nextPageToken, amount } = yield take(searchActions.SEARCH_FOR_VIDEOS[REQUEST])
    yield fork(searchForVideos, searchQuery, nextPageToken, amount)
  }
}