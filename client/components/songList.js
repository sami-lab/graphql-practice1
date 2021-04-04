import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo'; //joing component and query
import { Link } from 'react-router';

import fetchSongs from '../queries/fetchSongs';
function SongList(props) {
  const onDeleteHandler = (id) => {
    props
      .mutate({
        variables: {
          id,
        },
      })
      .then(() => props.data.refetch()); //use this method when calling refetch on same component(i.e SongList component with fetchSongs api)---Accociation
  };
  const renderSongs = () => {
    return props.data.map((song) => (
      <li className="collection-item" key={song.id}>
        <Link to={`/song/${song.id}`}> {song.title}</Link>
        <i className="material-icons" onClick={() => onDeleteHandler(song.id)}>
          delete
        </i>
      </li>
    ));
  };
  return (
    <div>
      {props.loading ? (
        'Loading'
      ) : (
        <>
          <ul className="collection">{renderSongs()}</ul>
          <Link to="/song/new" className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
          </Link>
        </>
      )}
    </div>
  );
}

const query = fetchSongs;
const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;
export default graphql(mutation)(graphql(query)(SongList));
