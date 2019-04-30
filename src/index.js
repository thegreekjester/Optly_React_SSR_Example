import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';


// Instantiate the express server object "app"
const app = express();   

// This line tells express that the "public" folder should be publicly available client side 
app.use(express.static('public'));

app.get('/favicon.ico', (req, res)=>{
    res.sendStatus(204)
})

// Wildcard handler for any route
app.get('*', (req,res) => {
    
    //instantiate initial redux store on the server
    const store = createStore()

    //Take incoming request path (the page the user is trying to fetch) and decide which components to render
    //The following is an example of what matchRoutes returns:
    // [ { route: 
    //     { path: '/optly',
    //       component: [Function],
    //       loadData: [Function: loadData] },
    //    match: { path: '/optly', url: '/optly', isExact: true, params: {} } } ]

    const promises = matchRoutes(Routes, req.path).map(({ route }) =>{
        //if the load data function exists in the route object, then call it passing in the server rendered redux store
        return route.loadData?route.loadData(store):null;
    })

    Promise.all(promises).then(() =>{

    // Send the browser the return from our renderer function (refactoring that isn't necessary but good for scale)
    res.send(renderer(req, store))

    })
   
})

// Broacast this to local host 3000
app.listen(3000, () => {
    console.log('Listening on port 3000!')

})