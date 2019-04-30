import axios from 'axios'

export const FETCH = 'fetch_datafile'
export const datafileFetch = () => async dispatch => {
    const res = await axios.get('https://cdn.optimizely.com/datafiles/VCCTQUjFWZMiYVSuikaVuQ.json')

    const userID = 'Peter'

    dispatch({
        type: FETCH,
        optlyInfo: {
            datafile:res.data,
            userID:userID
        }
    })
}