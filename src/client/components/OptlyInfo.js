import React from 'react'
import { connect } from 'react-redux'
import { bucketing } from '../actions'
import { OptimizelyFeature } from '@optimizely/react-sdk'

class OptlyInfo extends React.Component {
    componentDidMount() {
        this.props.bucketing();
    }
    render() {
        return (
            <OptimizelyFeature feature="first_feature">
                { featureEnabled => (featureEnabled ? <p>enabled</p> : <p>disabled</p>)}
            </OptimizelyFeature>
        )
    }
}

function mapStateToProps(state) {
    return { bucketing: state.bucketing }
}

function loadData(store) {
    return store.dispatch(bucketing())
}

export { loadData };

// Here we are providing functions (i.e the bucketing function) from the actions folder and make them available to the component
export default connect(mapStateToProps, { bucketing })(OptlyInfo);