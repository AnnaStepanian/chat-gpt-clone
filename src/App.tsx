import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

//constants
import { routes } from './constants';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Navigate to="/login" replace />} />
          {routes.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
