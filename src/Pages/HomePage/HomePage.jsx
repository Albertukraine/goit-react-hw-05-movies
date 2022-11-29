import {Link, NavLink, Outlet} from 'react-router-dom';



export const HomePage = props => {



    return <>
    <header>
        <nav>
        <NavLink>Movies</NavLink>
        <NavLink>Search</NavLink>
        <Link to="/home">Go Back</Link>
    </nav>
        </header>
        <Outlet />
    </>
}