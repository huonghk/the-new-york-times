import APIArticle from 'API/article';

export const actionTypes = {
  LOAD: 'ARTICLE_LOAD',
  UPDATE: 'ARTICLE_UPDATE',
};

const loadArtilce = (page) => APIArticle.load(page);
const loadStarting = () => {
  return {
    type: actionTypes.LOAD,
  };
};
const loadSuccess = (payload) => {
  return {
    type: actionTypes.UPDATE,
    payload,
  };
};

const load = (page) => {
  return dispatch => {
    dispatch(loadStarting());
    loadArtilce(page).then(data => dispatch(loadSuccess({ data, page })));
  };
};

export default { load };
