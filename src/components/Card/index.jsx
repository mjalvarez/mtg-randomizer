import React from 'react';
import { ManaCost } from '../ManaCost';
import { NoCard, Section, H2, Img, P } from './style';
import Back from '../../assets/images/back.png';


export const Card = ({ data }) => {

  if (!data.name) {
    return (
      <NoCard>
        <Img src={Back} alt="MTG" />
      </NoCard>
    );
  }

  return (
    <Section>
      <div className="row">
        <div className="col s4 min-dash right-align offset-s2">
          <Img src={data.imageUrl} alt={data.name} />
        </div>

        <div className="col s4 min-dash">
          <H2>
            {data.name}
            
          </H2>
          <span className="mana-cost">
            {data.manaCost && 
              <ManaCost manaCost={data.manaCost} />
            }
          </span>
          <P>
            <small>{data.type}</small>
          </P>
          <P>
            {data.text}
          </P>
          <P>
            Illustrated by: {data.artist}
          </P>
        </div>
        
      </div>
     
    </Section>
  );
};