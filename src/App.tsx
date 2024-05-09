import React from 'react';

//pages
import { Login, Chat } from './pages';

const App: React.FC = () => {
  return (
    <div className="App">
      Hello chat gpt
      <Login />
      <Chat />
    </div>
  );
};

export default App;
