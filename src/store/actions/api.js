import * as actions from '.'
import * as types from '../constants'

export const youtubeLibraryLoaded = actions.createAction.bind(
  null,
  types.YOUTUBE_LIBRARY_LOADED
)