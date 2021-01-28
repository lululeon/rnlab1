import createDataContext from './createDataContext'

// must return a (new) state. Args: <state, action>. In this case state is blogPosts list
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [
        ...state,
        {
          // title: `Blog Post #${state.length + 1}`,
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random() * 99999),
        },
      ]
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

// dispatchers
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_post', payload: { title, content } })
    if (callback) callback()
  }
}
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_post', payload: id })
  }
}
const updateBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'update_post', payload: { id, title, content } })
    if (callback) callback()
  }
}

// export!
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, updateBlogPost },
  [{ id: -1, title: 'TEST POST', content: 'test content here' }]
)
