import {Routes, Route, useNavigate} from 'react-router-dom'
import HomePage from '../views/HomePage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import MoviesPage from '../views/MoviesPages';
import Navigation from './Navigation';
import PagesError from './PagesError';
import Cast from '../views/Cast';

const App = () => {
  const {params} = useNavigate();
  return (
    <>
    <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:id/*' element={<MovieDetailsPage />}>
          <Route path={`${params}`} element={<Cast />} />
        </Route>
        <Route path='*' element={<PagesError/>}/>
      </Routes>
    </>
  );
}

export default App;
