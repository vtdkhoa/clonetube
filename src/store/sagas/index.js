import { all, call, put, fork } from 'redux-saga/effects'
import * as videoWatchers from './video'
import * as watchWatchers from './watch' // Weird naming =))

export default function* () {
  yield all([
    fork(videoWatchers.watchMostPopularVideos),
    fork(videoWatchers.watchVideoCategories),
    fork(videoWatchers.watchMostPopularVideosByCaterogy),
    fork(watchWatchers.watchWatchDetails)
  ])
}

/**
 * entity must have a success, request and failure method
 * request is a function that returns a promise when called
 * @param {function} request: a function that returns a promise
 * @param {object} entity: { request: func, success: func, failure: func }
 * @param {...any} ...args: the function variadic
 */
export function* fetchEntity(request, entity, ...args) {
  try {
    const response = yield call(request)
    // we directly return the result object and throw away the headers and the status text here
    // if status and headers are needed, then instead of returning response.result, we have to return just response
    yield put(entity.success(response.result, ...args))
  } catch (error) {
    yield put(entity.failure(error, ...args))
  }
}

/**
 * Todo: handling ignore errors when fetching APIs
 * (the most popular videos for example category) fail
 * @param {function} fn: a function takes an arbitrary amount of arguments (the seconds parameter)
 * @param  {...any} args: an arbitrary amount of arguments
 * @returns callback
 * Notes: I know, this's too weird. It means that if we call "ingoreErrors" with n parameters,...
 * Notes: ...the last n - 1 parameters are passed as parameters to the first parameter, which is the fn
 */
export function ignoreErrors(fn, ...args) {
  return () => {
    const ignoreErrorCallback = response => response
    return fn(...args).then(
      ignoreErrorCallback,
      ignoreErrorCallback
    )
  }
}