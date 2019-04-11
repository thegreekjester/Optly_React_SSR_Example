import axios from 'axios'
import * as optimizelySDK from '@optimizely/optimizely-sdk'

export const BUCKETING = 'fetch_bucketing'
export const bucketing = () => async dispatch => {
    const res = await axios.get('https://cdn.optimizely.com/datafiles/VCCTQUjFWZMiYVSuikaVuQ.json')

    var optimizelyClientInstance = optimizelySDK.createInstance({ datafile: res.data });

    var userId = 'Peter'
    var enabled = optimizelyClientInstance.isFeatureEnabled('first_feature', userId);

    dispatch({
        type: BUCKETING,
        bucketing: enabled
    })
}