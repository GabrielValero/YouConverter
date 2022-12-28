export async function downloadSource(id){
	const link = `https://you-converter-backend.vercel.app/api/video?videoId=${id}`

  return await fetch(link,{
    method: "GET",
    mode: 'cors',
  })
  .then(response=>response.json())

}

export function downloadSourceAlternative(id){
	const link = `https://youtube-video-info.p.rapidapi.com/video_formats?video=${id}`

	return fetch(link,{
    method: "GET",
    headers: {
	    'X-RapidAPI-Key': '97d003ab94msh8d3524b4213f269p14a2bejsn3ec75c0160be',
	    'X-RapidAPI-Host': 'youtube-video-info.p.rapidapi.com'
	  }
  })
  .then(response=>response.json())
  .then(res=>{
    console.log(res.AllFormats?.filter(format => format.Type === "mp3").sort((a,b) => a.Size < b.Size ? 1 : -1)[0].Link || res)
  	return {
      url: res.AllFormats.filter(format => format.Type === "mp3").sort((a,b) => a.Size < b.Size ? 1 : -1)[0].Link
    }
  })
}

export default function downloadSourceOtherAlternative(id){
  const link = `https://youtube-music-downloader-mp3.p.rapidapi.com/get_download_url?id=${id}&ext=mp3`

  return fetch(link,{
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '46832c81admsh7d55a555a88afb2p1e2befjsn67a18895760d',
      'X-RapidAPI-Host': 'youtube-music-downloader-mp3.p.rapidapi.com'
    }
  })
  .then(response=>response.json())
  .then(res=>{
    return {url: res.result.download_url}
  })

}