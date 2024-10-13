import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from './overviewElements/userSidebar';

function UserOverview() {
    return (
        <div className='UserOverview' style={{ height: '100vh', display: 'flex' }}>
            <UserSidebar />
            <div className='UserContent' style={{ flexGrow: 1 }}>
                <Outlet /> {/* This will render the matched child route */}
            </div>
        </div>
    );
}

export default UserOverview;
