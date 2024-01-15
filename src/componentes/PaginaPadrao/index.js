import Banner from "componentes/Banner"
import { Outlet } from "react-router-dom"

const PaginaPadrao = () => {
    return(
        <>
        <Banner />
        <Outlet />
        </>
    )
}

export default PaginaPadrao