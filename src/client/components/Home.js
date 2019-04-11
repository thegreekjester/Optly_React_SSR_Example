// We are allowed to use the "import" syntax because 
import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    I'm the greatest home component
                </div>
                <button onClick={() => console.log('Hi There')}>Press me!</button>
            </div>
        )
    }
}

