import React from 'react';

const SampleForm = () => {
  const [formData] = React.useState({
    senderName: 'John Doe',
    senderAddress: '123 Main St, Springfield',
    senderContact: '555-1234',
    email: 'john.doe@example.com',
    receiverName: 'Jane Smith',
    receiverAddress: '456 Elm St, Shelbyville',
    receiverContact: '555-5678',
    boxLoadWeight: '25 kg',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-7 p-5 border rounded bg-light shadow" style={{ marginTop: '5rem' }}>
      <h2 className="text-center mb-3">Shipping Information Form</h2>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Sender Name:</label>
          <input
            type="text"
            name="senderName"
            value={formData.senderName}
            className="form-control"
            disabled
          />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Sender Address:</label>
          <input
            type="text"
            name="senderAddress"
            value={formData.senderAddress}
            className="form-control"
            disabled
          />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Sender Contact:</label>
          <input
            type="text"
            name="senderContact"
            value={formData.senderContact}
            className="form-control"
            disabled
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Receiver Name:</label>
          <input
            type="text"
            name="receiverName"
            value={formData.receiverName}
            className="form-control"
            disabled
          />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Receiver Address:</label>
          <input
            type="text"
            name="receiverAddress"
            value={formData.receiverAddress}
            className="form-control"
            disabled
          />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Receiver Contact:</label>
          <input
            type="text"
            name="receiverContact"
            value={formData.receiverContact}
            className="form-control"
            disabled
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            className="form-control"
            disabled
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Box Load Weight:</label>
          <input
            type="text"
            name="boxLoadWeight"
            value={formData.boxLoadWeight}
            className="form-control"
            disabled
          />
        </div>
      </div>

      <button type="submit" className="btn btn-dark btn-block" disabled>Submit</button>
    </form>
  );
};

export default SampleForm;
