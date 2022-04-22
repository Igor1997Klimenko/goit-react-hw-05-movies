import {Routes, Route} from 'react-router-dom'
import { lazy } from 'react';

const CreateAsyncView = (componentName) => {
  return lazy(() => import(`../views/${componentName}`))
}
const CreateAsyncComp = (componentName) => {
  return lazy(() => import(`./${componentName}`))
}
const AsyncHomePage = CreateAsyncView('HomePage');
const AsyncMovieDetailsPage = CreateAsyncView('MovieDetailsPage');
const AsyncMoviesPage = CreateAsyncView('MoviesPages');
const AsyncCast = CreateAsyncView('Cast');
const AsyncReviews = CreateAsyncView('Reviews');
const AsyncNavigation = CreateAsyncComp('Navigation');
const AsyncPagesError = CreateAsyncComp('PagesError');

const App = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={ <AsyncNavigation />}>
        <Route index element={<AsyncHomePage />} />
        <Route path='movies' element={<AsyncMoviesPage />} />
        <Route path='movies/:id' element={<AsyncMovieDetailsPage />}>
            <Route path='cast' element={<AsyncCast />} />
            <Route path='reviews' element={<AsyncReviews />} />
        </Route>
        <Route path='*' element={<AsyncPagesError/>}/>
        </Route>
        </Routes>
    </>
  );
}

export default App;
