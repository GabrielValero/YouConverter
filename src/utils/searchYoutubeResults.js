import {youtubeKey, youtubeApiUrl} from './config'

export default function searchYoutubeResults(query){
	console.log(`${youtubeApiUrl}/search?&key=${youtubeKey}&q=${query.trim().replace(/ /g, '+')}&maxResults=12&order=relevance&type=video&part=snippet`)

	return fetch(`${youtubeApiUrl}/search?&key=${youtubeKey}&q=${query.trim().replace(/ /g, '+')}&maxResults=12&order=relevance&type=video&part=snippet`)
	  .then(response=>response.json())
	  .then(res=>{
	  	return res.items.map(video => {
	      return {
	        title: video.snippet.title,
	        artwork: video.snippet.thumbnails.medium.url,
	        videoId: video.id.videoId,
	        artist: video.snippet.channelTitle,
	      }
	    })
  	})
}
