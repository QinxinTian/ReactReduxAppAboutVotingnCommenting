import {
  RECEIVE_POSTS,
  INCREASE_POST_SCORE,
  DECREASE_POST_SCORE
} from '../actions'
 /*
$ curl --header "Authorization: xcx"  http://localhost:5001/posts
[ { "id":"8xf0y6ziyjabvozdd253nd",
    "timestamp":1467166872634,
    "title":"Udacity is the best place to learn React",
    "body":"Everyone says so after all.",
    "author":"thingtwo",
    "category":"react",
    "voteScore":6,
    "deleted":false
  },
  {
    "id":"6ni6ok3ym7mf1p33lnez",
    "timestamp":1468479767190,
    "title":"Learn Redux in 10 minutes!",
    "body":"Just kidding. It takes more than 10 minutes to learn technology.",
    "author":"thingone",
    "category":"redux",
    "voteScore":-5,
    "deleted":false
  } ]
*/
export default (state = [], action) => {
  switch (action.type) {

    case RECEIVE_POSTS:
      return [...action.posts]

    case INCREASE_POST_SCORE:
      // find the current post and increment its score
      return state.map(p => {
        if (p.id !== action.id) {
          return p;
        }
        return {
          ...p,
          voteScore: p.voteScore + 1
        }
      });
     case DECREASE_POST_SCORE:
      // find the current post and decrement its score
      return state.map(p => {
        if (p.id !== action.id) {
          return p;
        }
        return {
          ...p,
          voteScore: p.voteScore -1
        }
      });
    default:
      return state
  }
}
