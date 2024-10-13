import React from 'react';
import TrackingStatus from '../../../../components/status/TrackingStatus.js'; 

function UserTrackingInfo() {
  return (
    <div className='userTrackingInfo'>
      <TrackingStatus trackingNumber="FB24000" /> 
    </div>
  );
}

export default UserTrackingInfo;
