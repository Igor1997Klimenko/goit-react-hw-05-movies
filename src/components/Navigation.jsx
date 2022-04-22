import { Link, Outlet } from 'react-router-dom';
import { SubmitLink, Homecomponent } from '../styles.component';
import { Suspense } from 'react';


const Navigation = () => {
    return (
        <>
            <Homecomponent>
                <Link to="/"><SubmitLink>Home</SubmitLink></Link>
                <Link to="/movies"><SubmitLink>Movies</SubmitLink></Link>
            </Homecomponent>
            <Suspense fallback={<div>Загружаем...</div>}>
                <Outlet />
            </Suspense>
        </>
        
    )
}

export default Navigation;