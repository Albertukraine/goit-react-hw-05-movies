import {Link, NavLink, Outlet} from 'react-router-dom';



export const Header = props => {



    return <>
    <header>
        <nav>
        <NavLink to="/search">Search</NavLink>
        <Link to="/home">Go Back</Link>
    </nav>
        </header>
        <Outlet />
    </>
}