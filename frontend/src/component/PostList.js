
import React from 'react';
import moment from 'moment';

 const postList = ({ Posts, increasePostScore, decreasePostScore }) => {
  return (
    <div>
      { posts.map((p) =>
      <p key={p.id}> {p.title} </p>
      <div key={p.timestamp}>
      <h3><b>{p.title}</b></h3>
      <p>Date: {moment(p.timestamp).format("MMM-DD-YYYY hh:mma")} :: Author: {p.author} :: Category [{p.category}]</p>
      <p>{p.body}</p>
        <p>{p.body}</p>
        <Score
          id={p.id}
          score={p.voteScore}
          increaseFn={increasePostScore}
          decreaseFn={decreasePostScore}
        />
      </div>
      )}
    </div>
  );
