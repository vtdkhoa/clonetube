import { combineReducers } from 'redux'
import apiReducer from './api'
import videosReducer from './videos'
import channelsReducer from './channels'
import commentReducers from './comments'

export default combineReducers({
  api: apiReducer,
  videos: videosReducer,
  channels: channelsReducer,
  comments: commentReducers
})