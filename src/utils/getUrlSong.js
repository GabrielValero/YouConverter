export default async function getUrlSong(id, count = 0){
	const url = `${process.env.EXPO_PUBLIC_API_URL}/api/video?videoId=${id}`
	console.log(url);

	return await fetch(url)
	.then(response=>response.json())
	.then(res=>{
	
		return res.url
	
	}).catch(err=>{
	
		console.log("Hubo un error menol por el id ", err.message);
		if(count < 3) return getUrlSong(id, count + 1)
	
	})
}
