import Home from "./Components/Home/Home";
import Information from "./Components/Information/Information";
import Products from "./Components/Products/Products"
import User from "./Components/User/User";
import About from "./Components/About/About"


let routes = [
    {path: '/', element:<Home/>},
    {path: '/Products', element:<Products/>},
    {path: '/Information', element:<Information/>},
    {path: '/Profile', element:<User/>},
    {path: '/About', element:<About/>}
]

export {routes}