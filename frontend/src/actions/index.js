import { combineReducers } from 'redux'
 import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS
} from '../actions'



const CategoryReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
    const { categories } = action
    default:
      return []
      return state
  }
}
/*A reducer receives the current state and an action that was dispatched,
thendecides how to transform the current state into a brand new state based
on the action it received.*/
const PostReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return [...state, ...action.posts]
    default:
      return state
  }
}
 const CommentReducer = (state = initialState, action) => {
  console.log("state:", state)
  console.log("action:", action)
 const CommentReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}
 export default combineReducers({
  categories: CategoryReducer,
  posts: PostReducer,
  comments: ComentReducer
})
