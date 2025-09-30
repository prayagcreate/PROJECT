import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ipoData } from '../data';
import '../styles/App.css';

const IPODetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ipo = ipoData.find(item => item.id === parseInt(id));

  if (!ipo || !ipo.details) {
    return <div>IPO details not found.</div>;
  }

  const { details } = ipo;

  return (
    <div className="ipo-details-page">
      <div className="header">
        <div className="back-nav" onClick={() => navigate(-1)}>
          &larr; Home navigation placeholder
        </div>
        <button className="download-button">Download button</button>
      </div>
      <div className="ipo-details-container">
        <div className="company-header">
          {/* You can add the company logo here */}
          <h2>{ipo.company}</h2>
        </div>

        <div className="ipo-details-section">
          <h2>IPO details</h2>
          <div className="details-grid">
            <div>
              <p>Issue size</p>
              <p><b>{details.issueSize}</b></p>
            </div>
            <div>
              <p>Price range</p>
              <p><b>{details.priceRange}</b></p>
            </div>
            <div>
              <p>Minimum amount</p>
              <p><b>{details.minAmount}</b></p>
            </div>
            <div>
              <p>Lot size</p>
              <p><b>{details.lotSize}</b></p>
            </div>
            <div>
              <p>Issue dates</p>
              <p><b>{details.issueDates}</b></p>
            </div>
            <div>
              <p>Listed on</p>
              <p><b>{details.listedOn}</b></p>
            </div>
            <div>
              <p>Listed price</p>
              <p><b>{details.listedPrice}</b></p>
            </div>
            <div>
              <p>Listing gains</p>
              <p><b>{details.listingGains}</b></p>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h2>IPO timeline</h2>
          <div className="timeline-grid">
            {details.timeline.map((step, index) => (
              <div key={index} className="timeline-step">
                <div className="timeline-icon">✅</div>
                <p><b>{step.name}</b></p>
                <p>{step.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section">
          <h2>About the company</h2>
          <p>{details.about}</p>
        </div>
      </div>
    </div>
  );
};

export default IPODetails;