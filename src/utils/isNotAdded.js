const isNotAdded = (trackList, song)=>{
    return trackList.filter( item => item.title == song.title).length == 0
}
export default isNotAdded