import axios from 'axios'
import * as optimizelySDK from '@optimizely/js-web-sdk'

export const BUCKETING = 'fetch_bucketing'
export const bucketing = () => async dispatch => {
    const res = await axios.get('https://cdn.optimizely.com/datafiles/VCCTQUjFWZMiYVSuikaVuQ.json')

    const optimizelyClientInstance = optimizelySDK.createInstance({ datafile: res.data });

    const userID = 'Peter'

    dispatch({
        type: BUCKETING,
        bucketing: {
            datafile:res.data,
            userID:userID
        }
    })
}