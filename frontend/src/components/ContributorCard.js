import React from 'react';
import '../styles/ContributorCard.css';

const ContributorCard = ({ avatar_url, login, contributions }) => {
  return (
    <div className="contributor-card">
      <img src={avatar_url} alt={login} className="avatar" />
      <div className="contributor-info">
        <a href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer" className="username">
          {login}
        </a>
        <p className="contributions">Contributions: {contributions}</p>
      </div>
    </div>
  );
};

export default ContributorCard;
