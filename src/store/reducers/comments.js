import { SUCCESS } from '../constants'
import { WATCH_DETAILS } from '../actions/watch'
import { COMMENT_THREAD_LIST_RESPONSE } from '../api/youtube-response-types'
import { createSelector } from 'reselect'

const initialState = {
  byVideo: {},
  byId: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(
        action.response,
        action.videoId,
        state
      )

    default:
      return state
  }
}

function reduceWatchDetails(responses, videoId, prevState) {
  const commentThreadResponse = responses.find(
    response => response.result.kind === COMMENT_THREAD_LIST_RESPONSE
  )
  return reduceCommentThread(
    commentThreadResponse.result,
    videoId,
    prevState
  )
}

function reduceCommentThread(response, videoId, prevState) {
  if (!response) {
    return prevState
  }

  const newComments = response.items.reduce((accumulator, item) => {
    accumulator[item.id] = item
    return accumulator
  }, {})

  // if I have already fetched some comments for a particular video
  // I just append the ids for the new comments
  const prevCommentIds = prevState.byVideo[videoId]
    ? prevState.byVideo[videoId].ids
    : []
  const commentIds = [
    ...prevCommentIds,
    ...Object.keys(newComments)
  ]
  const byVideoComment = {
    nextPageToken: response.nextPageToken,
    ids: commentIds
  }

  return {
    ...prevState,
    byVideo: {
      ...prevState.byVideo,
      [videoId]: byVideoComment
    },
    byId: {
      ...prevState.byId,
      ...newComments
    }
  }
}

/*************
 * SELECTORS *
 *************
 */
function getCommentIdsForVideo(state, videoId) {
  const comment = state.comments.byVideo[videoId]
  if (comment) {
    return comment.ids
  }
  return []
}

export const getCommentsVideo = createSelector(
  getCommentIdsForVideo,
  state => state.comments.byId,
  (commentIds, allComments) => {
    return commentIds.map(commentId => allComments[commentId])
  }
)