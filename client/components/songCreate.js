import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

function SongCreate() {
  const [song, setSong] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.mutate({
      variables: {
        title: song,
      },
    });
  };
  return (
    <div>
      <h3>Create a new Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title:</label>
        <input value={song} onChange={(e) => setSong(e.target.value)} />
      </form>
    </div>
  );
}
const mutation = gql`
  mutation Songs($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
