import React from 'react';
import Sidebar from '../sidebar/sidebar';
import MainContent from '../../containers/main-content/main-content' ;

import './app.scss';

const App = () => {
    return <div className="app_container">
        <Sidebar/>
        <MainContent/>
    </div>
};

export default App