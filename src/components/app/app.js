import React from 'react';
import Sidebar from '../sidebar';
import MainContent from '../main-content' ;

import './app.scss'

const App = () => {
    return <div className="app_container">
        <Sidebar/>
        <MainContent/>
    </div>
};

export default App