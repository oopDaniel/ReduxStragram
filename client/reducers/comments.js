function postComment(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT': {
      return [
        ...state, {
          user: action.author,
          text: action.comment,
        }
      ];
    }
    case 'REMOVE_COMMENT': {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    }
  }
  return state;
}


function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComment(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
