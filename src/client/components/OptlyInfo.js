import React from 'react'
import { connect } from 'react-redux'
import { datafileFetch } from '../actions'
import { OptimizelyFeature } from '@optimizely/react-sdk'

class OptlyInfo extends React.Component {
    render() {
        return (
            <OptimizelyFeature feature="first_feature">
                { featureEnabled => (featureEnabled ? <p>enabled</p> : <p>disabled</p>)}
            </OptimizelyFeature>
        )
    }
}

function mapStateToProps(state) {
    return { optlyInfo: state.optlyInfo }
}

function loadData(store) {
    return store.dispatch(datafileFetch())
}

export { loadData };

// Here we are providing functions (i.e the bucketing function) from the actions folder and make them available to the component
export default connect(mapStateToProps, { datafileFetch })(OptlyInfo);