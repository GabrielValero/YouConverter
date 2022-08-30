import youtubeKey from '../config/Key'

export default function fetchVideoInfo({part = "snippet,contentDetails", videoId}){
  return fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${youtubeKey}&part=${part}`)
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
