import { VIDEO_DETAILS, WATCH_DETAILS } from '../actions/watch'
import { SUCCESS } from '../constants'
import { CHANNEL_LIST_REPONSE } from '../api/youtube-response-types'

const initialState = {
  byId: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(action.response, state)

    case VIDEO_DETAILS[SUCCESS]:
      return reduceVideoDetails(action.response, state)

    default:
      return state
  }
}

function reduceWatchDetails(responses, prevState) {
  const channelResponse = responses.find(
    response => response.result.kind === CHANNEL_LIST_REPONSE
  )
  let channels = {}

  if (channelResponse && channelResponse.result.items) {
    // I know that there will only be one item
    // because, I ask for a channel with a specific id
    const channel = channelResponse.result.items[0]
    channels[channel.id] = channel
  }

  return {
    ...prevState,
    byId: {
      ...prevState.byId,
      ...channels
    }
  }
}

function reduceVideoDetails(responses, prevState) {
  const channelResponse = responses.find(
    response => response.result.kind === CHANNEL_LIST_REPONSE
  )
  let channelEntry = {}

  if (channelResponse && channelResponse.result.items) {
    // I'm explicitly asking for a channel with a particular id
    // so the response set must either contain 0 items (if a channel with the specified id does not exist)
    // or at most one item (i.e. the channel I've been asking for)
    const channel = channelResponse.result.items[0]
    channelEntry = {
      [channel.id]: channel
    }
  }

  return {
    ...prevState,
    byId: {
      ...prevState.byId,
      ...channelEntry
    }
  }
}

/*************
 * SELECTORS *
 *************
 */
export const getChannel = (state, channelId) => {
  if (!channelId) return null
  return state.channels.byId[channelId]
}