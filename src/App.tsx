import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Navbar} from "./Components/navbar/Navbar";
import {Header} from "./Components/header/Header";
import {Profile} from "./Components/content/Profile/Profile";
import {Dialogs} from "./Components/content/Dialogs/Dialogs";


function App() {
    return (
        <div className="App">
            <Header/>
            <div className={`content`}>
                <Routes>
                    <Route path={`/profile`} element={<Profile/>}/>
                    <Route path={`/dialogs*`} element={<Dialogs/>}/>
                </Routes>
            </div>
            <Navbar/>
        </div>
    );
}

export default App;

