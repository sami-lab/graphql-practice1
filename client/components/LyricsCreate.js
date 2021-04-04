import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function LyricsCreate(props) {
  const [content, setContent] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props
      .mutate({
        variables: {
          content,
          songId: props.songId,
        },
      })
      .then(() => setContent(''));
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Add a Lyric</label>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
}

const mutation = gql`
  mutation AddLyricsToSong($songId: ID, $content: String) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricsCreate);
