import {
  fetchCategories,
  fetchPosts,
  increasePostScoreAPI,
  decreasePostScoreAPI
} from '../utils/api.js' /*define action constants*/
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POST = 'GET_POST'
@@ -9,6 +10,8 @@ export const REMOVE_POST = 'REMOVE_POST'
export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER'
export const DESCENDING_ORDER = 'desc'
export const ASCENDING_ORDER = 'asc'
export const INCREASE_POST_SCORE = 'INCREASE_POST_SCORE'
export const DECREASE_POST_SCORE = 'DECREASE_POST_SCORE'
 export const INCREASE_COMMENT_SCORE = 'INCREASE_COMMENT_SCORE'
export const DECREASE_COMMENT_SCORE = 'DECREASE_COMMENT_SCORE'
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'

/*define action creator*/
 export const addPost = (post) => ({
  type: ADD_POST,
  post
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
 export function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

export const getPosts = () => async (dispatch) => {
  try {
    const posts = await fetchPosts()
    dispatch(receivePosts(posts))
   } catch(err) {
    console.error("Error getting posts", err)
  }
}
const receiveCategories = (data.categories) => ({
  type: RECEIVE_CATEGORIES,
  categories getCategories = () => (dispatch) =>{
    .then(data => {
    dispatch(receiveCategories(data.categories))
  })
  .catch(err => console.error(err))
}
/* action creator for a synchronous action (change sort order) */
export const changeSortOrder = (sortOrder) => ({
  type: CHANGE_SORT_ORDER,
  sort: sortOrder
})
//action creator to define a category filter;
export const setCategoryFilter = (categoryFilter) => ({
  type: SET_CATEGORY_FILTER,
  filter: categoryFilter
})
export const increasePostScore = (id, posts) => async (dispatch) => {

export const getPosts = () => async(dispatch) => {
  try {
    await increasePostScoreAPI(id)
    await increasePostScoreAPI(id)
    dispatch({
      type: INCREASE_POST_SCORE,
      id
    })
  }
  catch(err) {
    console.error("Error increasing post voteScore", err)
  }
}
export const decreasePostScore = (id) => async (dispatch) => {
  try {
    await decreasePostScoreAPI(id)
    dispatch({
      type: DECREASE_POST_SCORE,
      id
    })
  }
  catch(err) {
    console.error("Error decreasing post voteScore", err)
  }
}
