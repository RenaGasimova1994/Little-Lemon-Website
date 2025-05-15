import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes'; // your route config

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
