import axios from 'axios'

export const FETCH = 'fetch_datafile'
export const datafileFetch = () => async dispatch => {
    const res = await axios.get('INSERT DATAFILE URL HERE')

    const userID = 'INSERT USERID OF YOUR CHOICE HERE'

    dispatch({
        type: FETCH,
        optlyInfo: {
            datafile:res.data,
            userID:userID
        }
    })
}