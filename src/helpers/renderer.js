import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes.js'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { OptimizelyProvider } from '@optimizely/react-sdk';
import * as optimizelySDK from '@optimizely/js-web-sdk'



export default (req, store) => {
    //get the store that server generated
    let storeJSON = store.getState();

    // Instantiate client to use for server side rendering
    const optimizelyClientInstance = optimizelySDK.createInstance({ datafile: storeJSON.optlyInfo.datafile});
    // RendertoString method is only used on the server!
    const content = renderToString(
        <OptimizelyProvider optimizely={optimizelyClientInstance} userId={storeJSON.optlyInfo.userID} isServerSide={true}>
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    <div>
                        {renderRoutes(Routes)}
                    </div>
                </StaticRouter>
            </Provider>
        </OptimizelyProvider>
    );
    //This the basic html template to send to the client, it includes the content (home component) as well as the client side bundle.js as a script tag
    // The reason the script tag below doesn't need something like "public/bundle.js" is because the public folder is the only thing available so its essentially the root directory
    return `
    <html>
        <head></head>
        <body>
        <div id='root'>${content}</div>
        <script>
        window.INITIAL_STATE=${JSON.stringify(store.getState())}
        </script>
        <script src='bundle.js'></script>
        </body>
    </html>
    `;
}