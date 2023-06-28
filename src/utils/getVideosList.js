import API_URL from './config'

export default async function getVideosList(query){
	const searchKey = query.trim().replace(/ /g, '+')
	const url = `${API_URL}/api/search?key=${searchKey}`
	console.log(searchKey);
	
	return await fetch(url,{
		mode: 'cors',
	})
		.then(res=>res.json())
		.catch(error=>{
			throw new Error(`Hubo un error al obtener la lista de videos. Mensaje: ${error.message}`)
		})
}
