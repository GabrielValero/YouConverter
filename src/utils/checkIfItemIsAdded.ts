import { TrackData } from '../types'

const checkIfTrackIsAdded = (
    itemList: TrackData[],
    item: TrackData,
): Boolean => {
    console.log('Prueba ', itemList.filter((i) => i.title == item.title).length)

    const check = itemList.filter((i) => i.title == item.title).length != 0

    return check
}
export default checkIfTrackIsAdded
