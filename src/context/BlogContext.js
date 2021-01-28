import jsonServer from '../api/jsonServer'
import createDataContext from './createDataContext'

// must return a (new) state. Args: <state, action>. In this case state is blogPosts list
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_posts':
      if (action.payload) return action.payload // initialise state with all the data pulled (source of truth) - no further logic required.
      return [] // fallback
    case 'delete_post':
      return state.filter((_) => _.id !== action.payload)
    case 'update_post':
      // quick n dirty
      const { id, title, content } = action.payload
      const post = state.find((_) => _.id === id)
      const rest = state.filter((_) => _.id !== id)
      return [...rest, { ...post, title, content }]
    default:
      return state
  }
}

// api dispatchers
const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    dispatch({ type: 'get_posts', payload: response.data })
  }
}

const addBlogPost = () => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content })
    if (callback) callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    // basically wait for the server-side delete to complete successfully, then mirror the change locally via state dispatch()
    await jsonServer.delete('/blogposts', { id })
    dispatch({ type: 'delete_post', payload: id })
  }
}

const updateBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content })
    dispatch({ type: 'update_post', payload: { id, title, content } })
    if (callback) callback()
  }
}

// export!
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, updateBlogPost, getBlogPosts },
  []
)
