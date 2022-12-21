import {youtubeKey, youtubeApiUrl} from './config'

export default function fetchVideoInfo({part = "snippet,contentDetails", videoId}){
  return fetch(`${youtubeApiUrl}/videos?id=${videoId}&key=${youtubeKey}&part=${part}`)
    .then(response=>response.json())
    .then(res=>{
      return {
        id: videoId,
        channel: res.items[0].snippet.channelTitle,
        title: res.items[0].snippet.title,
        image: res.items[0].snippet.thumbnails.high.url,
      }
    })
}
