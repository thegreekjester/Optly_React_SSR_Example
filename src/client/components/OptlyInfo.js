import React from 'react'
import { connect } from 'react-redux'
import { bucketing } from '../actions'

class OptlyInfo extends React.Component {
    componentDidMount() {
        this.props.bucketing();
    }
    render() {
        return (
            <div>
                Here's your datafile: 
                <div>{this.props.bucketing && <div>YOU ARE ENABLED</div>}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { bucketing: state.bucketing}
}

function loadData(store){
    return store.dispatch(bucketing())
}

export { loadData };

// Here we are providing functions (i.e the bucketing function) from the actions folder and make them available to the component
export default connect(mapStateToProps, {bucketing})(OptlyInfo);