import placeholderSmall from './placeholder-252.png';

// The pub_date returned by NYTimes API is not correct with ISO_8601 format
// https://en.wikipedia.org/wiki/ISO_8601
// E.g: 2018-11-29T08:26:15+0000
// This will lead to error to convert to Date object in some browsers
const normalizeIsoDate = (str) => {
  const part1 = str.slice(0, -2);
  const part2 = str.slice(-2);
  return `${part1}:${part2}`;
};

const getMultimediaUrl = ({ multimedia, type, placeholder }) => {
  const obj = multimedia.find(item => item.subtype === type);
  return obj ? `https://www.nytimes.com/${obj.url}` : placeholder;
};

const normalizeArticles = (response) => {
  const raw = response.data.response.docs
    .filter(item => item.document_type === 'article');

  return raw.map(item => ({
    id: item._id,
    snippet: item.snippet,
    multimedia: {
      small: getMultimediaUrl({ multimedia: item.multimedia, type: 'smallSquare252', placeholder: placeholderSmall }),
      large: getMultimediaUrl({ multimedia: item.multimedia, type: 'popup' }),
    },
    pubDate: normalizeIsoDate(item.pub_date),
    source: item.source,
  }));
};

export default normalizeArticles;
