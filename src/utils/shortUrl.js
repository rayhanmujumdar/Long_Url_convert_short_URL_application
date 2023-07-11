const shortUrl = (url, cb) => {
  const isUrl =
    /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/.test(
      url
    );
  if(url === ""){
    return cb("Enter a url", null)
  }else if (!isUrl) {
    return cb("URl not valid", null);
  }
  return cb(null, url);
};
export default shortUrl;
