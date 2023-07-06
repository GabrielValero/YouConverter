import {API_URL} from './config'

export default async function downloadSource(id, count = 0){
	const url = `${API_URL}/api/video?videoId=${id}`
	console.log(url);
	return await fetch(url)
	.then(response=>response.json())
	.then(res=>{
		return res.url
	}).catch(err=>{
		console.log("Hubo un error menol por el id ", err.message);
		if(count < 3) return downloadSource(id, count + 1)
	})
}
