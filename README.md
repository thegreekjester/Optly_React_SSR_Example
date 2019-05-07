# React Server Side Rendered (React SDK)

This is a working example of implementing the React SDK into a server-side rendered react application.

The application renders a featureTest of your choice both on the server and client side, please use the following directions to ensure a successful set up:

## Installation

Install all dependencies

```bash
npm install
```


## Usage



***1. Within /src/client/actions/index.js input your datafile URL and userID***

```javascript
import axios from 'axios'

export const FETCH = 'fetch_datafile'
export const datafileFetch = () => async dispatch => {
    const res = await axios.get('SUB YOUR DATAFILE URL HERE')

    const userID = 'INSERT USERID OF YOUR CHOICE HERE'

    dispatch({
        type: FETCH,
        optlyInfo: {
            datafile:res.data,
            userID:userID
        }
    })
}
```

***2. Within src/client/components/OptlyInfo.js add your featureTest key***

```javascript
import React from 'react'
import { connect } from 'react-redux'
import { datafileFetch } from '../actions'
import { OptimizelyFeature } from '@optimizely/react-sdk'

class OptlyInfo extends React.Component {
    render() {
        return (
            <OptimizelyFeature feature="INSERT YOUR FEATURE KEY HERE">
                { featureEnabled => (featureEnabled ? <p>enabled</p> : <p>disabled</p>)}
            </OptimizelyFeature>
        )
    }
}
```

***3. You can now launch the application on localhost:3000 by typing the following in your terminal!***

```bash
npm run dev
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
