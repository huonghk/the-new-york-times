const format = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}).format;

export default (str) => format(new Date(str));
