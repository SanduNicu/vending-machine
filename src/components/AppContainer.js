import { connect } from 'react-redux';
import App from 'components/App';

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
