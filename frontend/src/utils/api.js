  const getAuthHeaders = new Headers();
  headers.append('Authorization', 'xcx')
  headers.append('Content-Type', 'application/json')
return headers
};
export const fetchCategories = () => {
const options = { method: 'get', headers: getAuthHeaders() }
   return fetch('http://localhost:5001/categories', options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))


  export const fetchPosts = () => {
  const headers = new Headers();
  headers.append('Authorization', 'xcx')
  const options = { method: 'get', headers: getAuthHeaders() }
   return fetch('http://localhost:5001/posts', options)
    .then(
      res => {
        return res.json()
      }
    )
    .catch(err => console.error(err))
}
export const increasePostScoreAPI = (postId) => {
  const options = {
    method: 'post',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      option: 'upVote'
    })
  }

  return fetch(`http://localhost:5001/posts/${postId}`, options)
  .then(
    res => {
      return res.json()
    }
  )
  .catch(err => console.error(err))
}
 export const decreasePostScoreAPI = (postId) => {
  const options = {
    method: 'post',
    headers: getAuthHeaders(),
    body: JSON.stringify({
      option: 'downVote'
    })
  }
   return fetch(`http://localhost:5001/posts/${postId}`, options)
  .then(
    res => {
      return res.json()
    }
  )
  .catch(err => console.error(err))
}
