import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>

            <>
                <Outlet />
            </>
        </>
        
    )
}

export default Navigation;