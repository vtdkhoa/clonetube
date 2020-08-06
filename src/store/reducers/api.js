import * as types from '../constants'

const initialState = {
  libraryLoaded: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.YOUTUBE_LIBRARY_LOADED:
      return {
        libraryLoaded: true
      }

    default:
      return state
  }
}

export const getYoutubeLibraryLoaded = state => state.api.libraryLoaded