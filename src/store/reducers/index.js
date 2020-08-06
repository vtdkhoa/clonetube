import { combineReducers } from 'redux'
import apiReducer from './api'
import videosReducer from './videos'
import channelsReducer from './channels'

export default combineReducers({
  api: apiReducer,
  videos: videosReducer,
  channels: channelsReducer
})