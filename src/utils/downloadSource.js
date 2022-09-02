export default async function downloadSource({id}){
  return await fetch(`https://you-converter.herokuapp.com/downloadVideo?videoId=${id}`,{
    method: "GET",
    mode: 'cors',
  })
  .then(response=>response.json())
}
