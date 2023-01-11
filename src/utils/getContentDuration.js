import {youtubeKey, youtubeApiUrl} from './config'

export default function getContentDuration(id){
  return fetch(`${youtubeApiUrl}/videos?&key=${youtubeKey}&id=${id}&part=contentDetails`)
    .then(response=>response.json())
    .then(res=>{
	    const duration = res.items[0].contentDetails.duration
	    const seg = parseInt(duration.slice(duration.indexOf("T")+1, duration.indexOf("M")) * 60) + parseInt(duration.slice(duration.indexOf("M")+1, duration.indexOf("S")));

	    return seg
    })
}