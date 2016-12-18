import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './../actions/actionCreator';
import Main from './Main';

function mapState2Props(state) {
  return {
    posts:    state.posts,
    comments: state.comments,
  };
}

function mapDispatch2Props(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapState2Props, mapDispatch2Props)(Main);

export default App;
