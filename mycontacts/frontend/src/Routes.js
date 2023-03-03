import { Routes as ReactRoutes, Route } from 'react-router-dom';
import EditContact from './pages/EditContact';
import Home from './pages/Home';
import NewContact from './pages/NewContact';

export function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </ReactRoutes>
  );
}
