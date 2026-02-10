import React from 'react';
import { Link } from 'react-router-dom';
import './ProspectusPage.css';

const ProspectusPage = () => {
  return (
    <div className="prospectus-page">
      <div className="prospectus-toolbar">
        <Link className="prospectus-back" to="/">
          חזרה לדף הבית
        </Link>
        <a
          className="prospectus-download"
          href={`${process.env.PUBLIC_URL}/prospectus-smart-school.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          פתיחה בחלון חדש
        </a>
      </div>
      <div className="prospectus-frame">
        <iframe
          title="פרוספקט סמארט סקול"
          src={`${process.env.PUBLIC_URL}/prospectus-smart-school.pdf`}
        />
      </div>
    </div>
  );
};

export default ProspectusPage;
