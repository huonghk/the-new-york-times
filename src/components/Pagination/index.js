import { connect } from 'react-redux';
import actions from 'store/article/actions';
import Display from './Display';

const mapStateToProps = state => ({
  current: state.article.page,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (page) => dispatch(actions.load(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Display);
