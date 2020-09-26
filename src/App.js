import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
        <Header />

        <div className="app-body d-flex">
            <Sidebar />
            {/* Widgets */}
        </div>
    </div>
  );
}

export default App;
