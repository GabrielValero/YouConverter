import React, { useContext } from 'react'
import ConverterContext from '../context/ConverterContext'

import getVideosList from '../utils/getVideosList'
import { useHistoryStore } from '../store/useHistoryStore'

export default function useYoutube() {
    const { setYoutubeVideosList } = useContext(ConverterContext)
    const storeNewSearch = useHistoryStore((state) => state.storeNewSearch)

    const getQueryResult = ({ search }: { search: string }) => {
        const isYoutubeLink =
            search.includes('youtube.com/watch?v=') ||
            search.includes('youtu.be/')
        let temp

        if (isYoutubeLink) {
            if (search.includes('youtu.be/'))
                temp = search.slice(search.indexOf('.be/') + 4) // If url is mobile version.
            else if (
                search.includes('youtube.com/watch?v=') &&
                search.includes('&')
            )
                temp = search.slice(
                    search.indexOf('v=') + 2,
                    search.indexOf('&'),
                ) // If url is web version and include &.
            else temp = search.slice(search.indexOf('v=') + 2) // if url is web version and don´t include &
        } else {
            storeNewSearch(search)
            fetchVideosList({ key: search })
        }
    }

    const fetchVideosList = async ({ key }: { key: string }) => {
        try {
            const result = await getVideosList(key)
            
            setYoutubeVideosList(result)
        } catch (err: any) {
            throw new Error(
                `Fallo al obtener la lista de canciones. error: ${err.message}`,
            )
        }
    }

    return {
        getQueryResult,
        fetchVideosList,
    }
}
