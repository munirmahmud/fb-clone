import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import './App.css';
import WidgetsRight from "./components/Widgets/WidgetsRight";
import Login from "./components/Login/Login";


function App() {
    const user = null;

  return (
    <div className="app">
        {!user ? (
            <Login />
        ) : (
            <>
            <Header />

            <div className="app-body d-flex">
                <Sidebar />
                <Feed />
                <WidgetsRight />
            </div>
            </>
        )}
    </div>
  );
}

export default App;
