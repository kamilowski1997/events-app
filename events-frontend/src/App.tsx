import { Route, Routes } from 'react-router-dom';
import { HOME_PAGE } from './consts/routes';
import { AddEventPage } from './pages';

const App = () => (
  <Routes>
    <Route path={HOME_PAGE} element={<AddEventPage />} />
  </Routes>
);

export default App;
