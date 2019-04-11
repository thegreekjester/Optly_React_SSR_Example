import OptlyInfo, { loadData } from './components/OptlyInfo'



// We use this type of route structure because its server side rendered 
// Therefore, we need this syntax to use React router config module
export default [
    {   
        loadData,
        path:'/',
        component: OptlyInfo,
        exact:true
    }
]
