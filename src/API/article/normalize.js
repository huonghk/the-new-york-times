import placeholderSmall from './placeholder-252.png';

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
    pubDate: item.pub_date,
    source: item.source,
  }));
};

export default normalizeArticles;
