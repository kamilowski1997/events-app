import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import { HOME_PAGE } from './consts/routes';
import { AddEventPage } from './pages';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path={HOME_PAGE} element={<AddEventPage />} />
    </Route>
  </Routes>
);

export default App;
