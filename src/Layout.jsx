import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Home"

const Layout=()=>{
    return(
        <>
        <Header />
        {/* <Home /> */}
         <Outlet />
        </>
    )
}
 export default Layout