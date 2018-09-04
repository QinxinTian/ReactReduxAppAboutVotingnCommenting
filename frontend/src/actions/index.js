import { fetchCategories, fetchPosts } from '../utils/api.js'
 // defina action constants
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POST = 'GET_POST'
@@ -9,6 +10,8 @@ export const REMOVE_POST = 'REMOVE_POST'
 export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
 export const DEFINE_SORT_ORDER = 'DEFINE_SORT_ORDER'
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

export const getPosts = (sortBy) => async (dispatch) => {
  try {
    const posts = await fetchPosts()
     console.log("Will sort by", sortBy)
    console.log("(before) posts: ", posts)
     posts.sort( (a, b) => b[sortBy] - a[sortBy] )

    console.log("(after) posts: ", posts)

    dispatch(receivePosts(posts))
   } catch(err) {
    console.error("Error getting posts", err)
  }
}
const receiveCategories = (data.categories) => ({
  type: RECEIVE_CATEGORIES,
  categories getCategories = () => (dispatch) =>{
    dispatch(receiveCategories(data.categories))
    })
    .catch(err => console.error(err))
  }
 export const defineSortOrder = (sort) => (dispatch) => ({
  type: DEFINE_SORT_ORDER,
  sort
})
