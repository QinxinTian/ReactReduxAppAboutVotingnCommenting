import React from 'react';
import { Link } from 'react-router-dom'

import moment from 'moment';
import Score from './Score';
import { ASCENDING_ORDER } from '../actions';


const PostList = ({
  posts,
  increasePostScoreFunc,
  decreasePostScoreFunc,
  sort,
  filter
}) => {
  let filteredPosts = [];
   if (filter !== '') {
     filteredPosts = posts.filter((p) => p.category === filter)
       } else {
         filteredPosts = posts;
         }
         if (sort.order === ASCENDING_ORDER) {
    filtersPosts.sort( (a, b) => a[sort.field] - b[sort.field] )
  } else {
    filtersPosts.sort( (a, b) => b[sort.field] - a[sort.field] )
  }  return (
    <div>
    { filterPosts.length === 0 &&
            <div><p>No posts for [{ filter }] category</p></div>
          }
           { filterPosts && filterPosts.map((p) =>
             <p key={p.id}> {p.title} </p>
      <Link to={`/${p.category}/${p.id}`}>
                <h3><b>{p.title}</b></h3>
              </Link>
              <p>Date: {moment(p.timestamp).format("MMM-DD-YYYY hh:mma")} :: Author: {p.author} :: Category [{p.category}]</p>
      <p>{p.body}</p>
        <p>{p.body}</p>
        <Score
          id={p.id}
          score={p.voteScore}
          increaseScoreFn={increasePostScoreFunc}
          decreaseScoreFn={decreasePostScoreFunc}
        />
      </div>
      )}
    </div>
  );
}
PostList.propTypes = {
  sort: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  increasePostScoreFunc: PropTypes.func.isRequired,
  decreasePostScoreFunc: PropTypes.func.isRequired
}

export default PostList;
