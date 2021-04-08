import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
function LyricsList() {
  const onLikeHandler = (id, likes) => {
    props
      .mutate({
        variables: {
          id,
        },
        optimisticResponse: {
          //use to render optimistic response to user(without finsihing query response will be visible to user by guessing)
          _typename: 'Mutation',
          likeLyrics: {
            id: id,
            __typename: 'LyricType',
            likes: likes + 1, //guessing
          },
        },
      })
      .then(() => console.log('done'))
      .catch((err) => console.log(err));
  };
  const renderLyrics = () => {
    return props.lyrics.map((lyric) => (
      <li className="collection-item" key={lyric.id}>
        {lyric.content}
        <div className="vote-box">
          <i
            className="material-icons"
            onClick={() => onLikeHandler(song.id, lyric.likes)}
          >
            thumb_up
          </i>
          {lyric.likes}
        </div>
      </li>
    ));
  };
  return <ul className="collection">{renderLyrics()}</ul>;
}

const likeMutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
export default graphql(likeMutation)(LyricsList);
