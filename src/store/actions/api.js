import { createAction } from '.'
import { YOUTUBE_LIBRARY_LOADED } from '../constants'

export const youtubeLibraryLoaded = createAction.bind(null, YOUTUBE_LIBRARY_LOADED)