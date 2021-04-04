import React from 'react';

function LyricsList() {
  const onLikeHandler = (id) => {};
  const renderLyrics = () => {
    return props.lyrics.map((lyric) => (
      <li className="collection-item" key={lyric.id}>
        {lyric.content}
        <i className="material-icons" onClick={() => onLikeHandler(song.id)}>
          thumb_up
        </i>
      </li>
    ));
  };
  return <ul className="collection">{renderLyrics()}</ul>;
}

export default LyricsList;
