export async function downloadSource(id){
	const link = `https://you-converter-backend.vercel.app/api/video?videoId=${id}`

  return await fetch(link,{
    method: "GET",
    mode: 'cors',
  })
  .then(response=>response.json())

}

export default async function downloadSourceAlternative(id){
	const link = `https://youtube-video-info.p.rapidapi.com/video_formats?video=${id}`

	return await fetch(link,{
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