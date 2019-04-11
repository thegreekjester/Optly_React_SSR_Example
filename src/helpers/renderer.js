import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes.js'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'



export default (req, store) => {
    // Take the react component "Home" and render it as a HTML string
    // RendertoString method is only used on the server!
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <div>
                    {renderRoutes(Routes)}
                </div>
            </StaticRouter>
        </Provider>
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