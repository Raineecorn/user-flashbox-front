import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import ordered from '../../images/statusTrack/ordered.png';
import inTransit from '../../images/statusTrack/in_transit.png';
import delivered from '../../images/statusTrack/delivered.png';
import arrived from '../../images/statusTrack/arrivedAt.png';
import notFound from '../../images/statusTrack/notFound.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrackingStatus = ({ trackingNumber }) => {
  const [trackingStatus, setTrackingStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrackingStatus = async () => {
      setLoading(true);
      try {
        const statuses = getSampleTrackingStatus(trackingNumber);
        setTrackingStatus(statuses);
      } catch (error) {
        console.error('Error fetching tracking status:', error);
        setTrackingStatus([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrackingStatus();
  }, [trackingNumber]);

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="container mt-5 pt-5 bg-white rounded ">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {trackingStatus.length > 0 ? (
            trackingStatus.map((status, index) => (
              <div key={index} className="row-md-4 d-flex flex-column align-items-center mb-3">
                <img src={status.image} alt={status.remarks} className="img-fluid mb-2" style={{ width: '50px', height: '50px' }} />
                <p className="text-center">{status.remarks} - {formatTimestamp(status.timestamp)}</p>
              </div>
            ))
          ) : (
            <p className="text-center w-100">No tracking information available.</p>
          )}
        </div>
      )}
    </div>
  );
};

// Sample data function utilizing getImageForStatus
const getSampleTrackingStatus = (number) => {
  const data = [
    { remarks: 'Ordered', timestamp: '2023-08-20T10:00:00Z' },
    { remarks: 'In Transit', timestamp: '2023-08-21T15:30:00Z' },
    { remarks: 'Arrived at Facility', timestamp: '2023-08-22T09:00:00Z' },
    { remarks: 'Out for Delivery', timestamp: '2023-08-23T08:00:00Z' },
    { remarks: 'Delivered', timestamp: '2023-08-23T13:45:00Z' },
  ];

  if (number === 'FB24000') {
    return data.map(item => ({ ...item, image: getImageForStatus(item.remarks) }));
  }
  
  return [{
    remarks: 'No tracking information available',
    image: notFound,
    timestamp: new Date().toISOString(),
  }];
};

const getImageForStatus = (remarks) => {
  const imageMap = {
    'ordered': ordered,
    'in transit': inTransit,
    'delivered': delivered,
    'arrived': arrived,
    'out for delivery': delivered,
    'not found': notFound,
    'no tracking': notFound,
  };

  for (let key in imageMap) {
    if (remarks.toLowerCase().includes(key)) {
      return imageMap[key];
    }
  }
  return notFound;  // Default image if no match is found
};

// Add PropTypes validation
TrackingStatus.propTypes = {
  trackingNumber: PropTypes.string.isRequired,  // Expect a string and make it required
};

export default TrackingStatus;
