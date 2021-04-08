import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricsCreate from './LyricsCreate';
import LyricsList from './LyricsList';
import fetchSong from '../queries/fetchSong';
function SongDetails(props) {
  if (props.loading) return <div>Loading</div>;
  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{props.data.song.title}</h3>
      <LyricsList lyrics={song.lyrics} />
      <LyricsCreate songId={props.params.id} />
    </div>
  );
}

const query = fetchSong;
//since In initail query we wanna pass some variable so we use this syntax
export default graphql(
  query,
  {
    options: (props) => {
      return { variables: { id: props.params.id } };
    },
  },
  SongDetails
);
