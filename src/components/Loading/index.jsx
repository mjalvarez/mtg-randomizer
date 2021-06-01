import React from 'react';
import { Load, Loader, LoaderWheel, LoaderText } from './style';

export const Loading = () => {
  return (
    <Load>
      <Loader>
        <LoaderWheel />
        <LoaderText />
      </Loader>
    </Load>
  );
};