export default async function fetchInstagramInfo({url}){
  return await fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(JSON.parse(data));
    })
    .catch(err => {
      console.log(err);
    });
}
