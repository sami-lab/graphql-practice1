import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'; //joing component and query

function SongList(props) {
  const renderSongs = () => {
    return props.data.map((song) => (
      <li className="collection-item" key={song.id}>
        song.title
      </li>
    ));
  };
  return (
    <div>
      {props.loading ? (
        'Loading'
      ) : (
        <ul className="collection">{renderSongs()}</ul>
      )}
    </div>
  );
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
