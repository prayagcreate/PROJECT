import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IPOList from './components/IPOList';
import IPODetails from './components/IPODetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IPOList />} />
        <Route path="/ipo/:id" element={<IPODetails />} />
      </Routes>
    </Router>
  );
};

export default App;