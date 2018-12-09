import { connect } from 'react-redux';
import actions from 'store/article/actions';
import Container from './Container';

const mapStateToProps = state => ({
  loading: state.article.loading,
  articles: state.article.data,
});

const mapDispatchToProps = dispatch => ({
  loadArticles: () => dispatch(actions.load(1)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
