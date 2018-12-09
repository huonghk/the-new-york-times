import API from 'API';
import normalize from './normalize';

const load = (page) => (
  API.get('/articlesearch.json', {
    params: {
      'api-key': '5763846de30d489aa867f0711e2b031c',
      q: 'singapore',
      page: page,
    },
  })
  .then(normalize)
);

export default { load };
