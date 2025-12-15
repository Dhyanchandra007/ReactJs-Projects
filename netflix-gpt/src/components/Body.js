import {createBrowserRouter} from 'react-router-dom';

import Login from "./Login"
import Browse from "./Browse";
import Header from './Header';

import {RouterProvider} from 'react-router-dom';
const Body=()=>{

    const appRouter= createBrowserRouter([

        { 
            path:'/',
            element:<Login/>
        },
        { 
            path:'/browse',
            element:<Browse/>
        }
    ]
    )
    return (
        <>
        <Header/>
        <RouterProvider router={appRouter} />
        </>

        
        
    )
}
export default Body;