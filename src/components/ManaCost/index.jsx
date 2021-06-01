import React from 'react';
import { Cost, Img, Span } from './style';

export const ManaCost = ({ manaCost }) => {
  const arrayMana = manaCost.split('}{').map(el => el.replace('{', '').replace('}', ''));

  const classList = {
    W: 'ms ms-w',
    U: 'ms ms-u',
    B: 'ms ms-b',
    G: 'ms ms-g',
    R: 'ms ms-r',
    'B/G': 'ms ms-ci ms-ci-2 ms-ci-bg',
    'B/R': 'ms ms-ci ms-ci-2 ms-ci-br',
    'G/U': 'ms ms-ci ms-ci-2 ms-ci-gu',
    'G/W': 'ms ms-ci ms-ci-2 ms-ci-gw',
    'R/G': 'ms ms-ci ms-ci-2 ms-ci-rg',
    'R/W': 'ms ms-ci ms-ci-2 ms-ci-rw',
    'U/B': 'ms ms-ci ms-ci-2 ms-ci-ub',
    'U/R': 'ms ms-ci ms-ci-2 ms-ci-ur',
    'W/B': 'ms ms-ci ms-ci-2 ms-ci-wb',
    'W/U': 'ms ms-ci ms-ci-2 ms-ci-wu',
  };

  const mana = arrayMana.map((el) => {
    if (classList[el]) {
      return classList[el];
    }
    return { element: el };
  });
  
  return (
    <Cost>
      { 
        mana.map((el, index) => {
          if (typeof el === 'object') {
            return (
              <Span key={index}>{el.element}</Span> 
            );
          } else {
            return (
              <i className={el} alt="Mana"/>
            );
          }
        }) 
      }

      
      
    </Cost>
  );
};