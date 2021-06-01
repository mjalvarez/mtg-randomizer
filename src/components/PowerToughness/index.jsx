import React from 'react';
import { Stat } from './style';

export const PowerToughness = ({ power, toughness }) => {

  return (
    <Stat>
      <PowerToughness>
        {power}/{toughness}
      </PowerToughness>
    </Stat>
  );
};