export default async function downloadSource({id, format = "highestaudio"}){
  return await fetch(`https://you-converter.herokuapp.com/downloadVideo?videoId=${id}&format=${format}`,{
    method: "GET",
    mode: 'cors',
  })
  .then(response=>response.json())
  .then(res=>{
    return res.url
  })

}
