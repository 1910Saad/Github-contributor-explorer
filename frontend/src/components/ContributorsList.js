import React, { useState, useEffect } from 'react';
import ContributorCard from './ContributorCard';
import Loader from './Loader';
import '../styles/ContributorsList.css';
import axios from 'axios';

const ContributorsList = () => {
  const [contributors, setContributors] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchContributors = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/contributors', {
        params: { page: page, per_page: 10 },
      });
      setContributors((prevContributors) => [...prevContributors, ...response.data]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contributors:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributors();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="contributors-list">
      {contributors.map((contributor) => (
        <ContributorCard
          key={contributor.id}
          avatar_url={contributor.avatar_url}
          login={contributor.login}
          contributions={contributor.contributions}
        />
      ))}
      {loading && <Loader />}
    </div>
  );
};

export default ContributorsList;
