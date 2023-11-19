import {Outlet,Navigate} from "react-router-dom"
const PrivateRoutes = () => {

    const a =1
    const b = 2;
  return a>b ? <Outlet/> : <Navigate to='/' replace />


export default PrivateRoutes;
