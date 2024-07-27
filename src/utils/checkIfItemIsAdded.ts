import { TrackData } from "../types"

const checkIfItemIsAdded  = (itemList: any[], item: any): Boolean=>{
    return itemList.filter( i => i.title == item.title).length != 0
}
export default checkIfItemIsAdded 