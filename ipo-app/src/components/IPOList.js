import React from 'react';
import { Link } from 'react-router-dom';
import { ipoData } from '../data';
import '../App.css';

const IPOList = () => {
  return (
    <div className="ipo-list-page">
      <h1>1. IPO list page</h1>

      {/* Header row */}
      <div className="ipo-table-header">
        <p>Company / Issue date</p>
        <p>Issue size</p>
        <p>Price range</p>
        <p>Min invest/qty</p>
      </div>

      {/* IPO rows */}
      <div className="ipo-list-container">
        {ipoData.map((ipo) => (
          <Link to={`/ipo/${ipo.id}`} key={ipo.id} className="ipo-card">
            <div className="company-info">
              <img src={ipo.logo} alt={ipo.company} className="company-logo" />
              <div>
                <h2>{ipo.company}</h2>
                <p className="issue-date">{ipo.issueDate}</p>
              </div>
            </div>
            <p>{ipo.issueSize}</p>
            <p>{ipo.priceRange}</p>
            <div>
              <p>{ipo.minInvestment}</p>
              <p className="lots">{ipo.lots}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IPOList;
