import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import './App.css';
import WidgetsRight from "./components/Widgets/WidgetsRight";

function App() {
  return (
    <div className="app">
        <Header />

        <div className="app-body d-flex">
            <Sidebar />
            <Feed />
            <WidgetsRight />

            {/* Widgets */}
        </div>
    </div>
  );
}

export default App;
