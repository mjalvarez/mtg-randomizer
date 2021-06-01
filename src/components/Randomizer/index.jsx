import axios from 'axios';
import React from 'react';
import { MdSearch, MdStars } from "react-icons/md";
import { Button, Bar } from './style';

export const Randomizer = ({ onResult, isLoading, loading }) => {

  const search = (ev) => {
    ev.preventDefault();
    isLoading(true);
    axios.get('cards', {
      params: {
        random: true,
        pageSize: 1
      },
    })
    .then(({data}) => {
      onResult(data.cards[0]);
      isLoading(false);
    });
  };

  return (
    <Bar className="searchBar">
      <form onSubmit={search}>
        <Button disabled={loading} type="submit" className="blue darken-4 waves-effect waves-light btn extra">
          Show Random Card <MdStars />
        </Button>
      </form>
    </Bar>
  );
};