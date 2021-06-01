import React, { useState } from 'react';
import { Randomizer } from '../components/Randomizer';
import { Loading } from '../components/Loading';
import { Card } from '../components/Card';

export const Dashboard = () => {
  const [details, setCard] = useState({});
  const [loading, setLoading] = useState(false);

  const initLoad = (loadState) => {
    if (loadState) {
      setCard({});
    }
    setLoading(loadState);
  };
  
  return (
    <section className="section">
      <div className="row">
        <div className="col s12 min-dash">
          <Card data={details} />
          <Randomizer onResult={setCard} loading={loading} isLoading={initLoad} />
          {loading && 
            <Loading />
          }
        </div>
        
      </div>
    </section>
  );
};