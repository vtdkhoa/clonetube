/** Util - Youtube API boilerplate code */

export function buildApiRequest(requestMethod, path, params, properties) {
  params = removeEmptyParams(params)
  let request

  if (properties) {
    let resource = createResource(properties)
    request = window.gapi.client.request({
      'body': resource,
      'method': requestMethod,
      'path': path,
      'params': params
    })
  } else {
    request = window.gapi.client.request({
      'method': requestMethod,
      'path': path,
      'params': params
    })
  }

  return request
}

const removeEmptyParams = params => {
  for (let p in params) {
    if (!params[p] || params[p] === 'undefined') {
      delete params[p]
    }
  }
  return params
}

const createResource = properties => {
  let resource = {}
  let normalizedProps = properties

  for (let p in properties) {
    let value = properties[p]
    if (p && p.substr(-2, 2) === '[]') {
      let adjustedName = p.replace('[]', '')
      if (value) {
        normalizedProps[adjustedName] = value.split(',')
      }
      delete normalizedProps[p]
    }
  }

  for (let prop in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(prop) && normalizedProps[prop]) {
      let propArray = prop.split('.')
      let ref = resource
      for (let pa = 0; pa < propArray.length; pa++) {
        let key = propArray[pa]
        if (pa === propArray.length - 1) {
          ref[key] = normalizedProps[prop]
        } else {
          ref = ref[key] = ref[key] || {}
        }
      }
    }
  }

  return resource
}

export function buildMostPopularVideosRequest(amount = 12, loadDescription = false, nextPageToken, videoCategoryId = null) {
  let fields = 'nextPageToken,prevPageToken,items(contentDetails/duration,id,snippet(channelId,channelTitle,localized/title,publishedAt,thumbnails/medium,title),statistics/viewCount),pageInfo(totalResults)'
  if (loadDescription) {
    fields += ',items/snippet/description'
  }

  return buildApiRequest('GET',
    '/youtube/v3/videos',
    {
      part: 'snippet,statistics,contentDetails',
      chart: 'mostPopular',
      maxResults: amount,
      regionCode: 'US',
      pageToken: nextPageToken,
      fields,
      videoCategoryId
    }, null
  )
}

export function buildVideoCategoriesRequest() {
  return buildApiRequest('GET',
    '/youtube/v3/videoCategories',
    {
      part: 'snippet',
      regionCode: 'US',
    }, null
  )
}

export function buildVideoDetailRequest(videoId) {
  return buildApiRequest('GET',
    '/youtube/v3/videos',
    {
      part: 'snippet,statistics,contentDetails',
      id: videoId,
      fields: 'kind,items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,thumbnails/medium,title),statistics)'
    }, null
  )
}

export function buildRelatedVideosRequest(videoId, amount = 12) {
  return buildApiRequest('GET',
    '/youtube/v3/search',
    {
      part: 'snippet',
      type: 'video',
      maxResults: amount,
      relatedToVideoID: videoId
    }, null
  )
}