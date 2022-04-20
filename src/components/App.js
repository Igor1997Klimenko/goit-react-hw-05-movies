import {Routes, Route} from 'react-router-dom'
import HomePage from '../views/HomePage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import MoviesPage from '../views/MoviesPages';
import Navigation from './Navigation';
import PagesError from './PagesError';
import Cast from '../views/Cast';

const App = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={ <Navigation />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:id/' element={<MovieDetailsPage />}>
            <Route path='cast' element={<Cast />} />
        </Route>
        <Route path='*' element={<PagesError/>}/>
        </Route>
        </Routes>
    </>
  );
}

export default App;
