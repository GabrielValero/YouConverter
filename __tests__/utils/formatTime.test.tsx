import react from 'react'
import formatTime from '../../src/utils/formatTime'

describe('formatTime', () => {
    test('returns 00:00 if time is null', () => {
        const time = null
        const result = formatTime(time)
        expect(result).toBe('00:00')
    })
    test('returns 00:10 if time is 10', () => {
        const time = 10
        const result = formatTime(time)
        expect(result).toBe('00:10')
    })
    test('returns 01:00 if time is 60', () => {
        const time = 60
        const result = formatTime(time)
        console.info(result)
        expect(result).toBe('01:00')
    })
    test('returns 10:00 if time is 600', () => {
        const time = 600
        const result = formatTime(time)
        console.info(result)
        expect(result).toBe('10:00')
    })
    test('returns 10:01 if time is 601', () => {
        const time = 601
        const result = formatTime(time)
        console.info(result)
        expect(result).toBe('10:01')
    })
})