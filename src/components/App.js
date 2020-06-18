import React from 'react';
import Feed from './index';
import 'antd/dist/antd.css';
import { ProfileInfo } from './ProfileInfo';

function App() {
    return (
        <>
            <ProfileInfo />
            <Feed />
        </>
    );
}

export default App;
