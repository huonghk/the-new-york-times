import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = composeWithDevTools(applyMiddleware(thunk));

export default middlewares;
