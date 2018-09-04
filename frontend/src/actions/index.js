import { fetchCategories, fetchPosts } from '../utils/api.js'
 /*define action constants*/
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const GET_POST = 'GET_POST'
@@ -9,6 +10,8 @@ export const REMOVE_POST = 'REMOVE_POST'
export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER'
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

export const getPosts = (sortOrder) => async (dispatch) => {
  try {
    const posts = await fetchPosts()
    console.log("sortOrder", sortOrder)
    if (sortOrder.order === 'desc') {
          posts.sort( (a, b) => b[sortOrder.field] - a[sortOrder.field] )
        } else {
          posts.sort( (a, b) => a[sortOrder.field] - b[sortOrder.field] )
        }

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
