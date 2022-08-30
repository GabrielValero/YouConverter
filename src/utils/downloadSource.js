export default async function downloadSource({id, format = "highestaudio"}){
  return await fetch(`https://you-converter.herokuapp.com/downloadVideo?link=${id}&format=${format}`,{
    method: "GET",
    mode: 'cors',
  })
  .then(response=> response.json())
  .then(res=>{
    console.log(res);
    return res
  })

}
