import genHash from "./genHash";

const getShortUrl = (longUrl, cb) => {
  // check valid url
  const isUrl =
    /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/.test(
      longUrl
    );
  if (longUrl === "") {
    return cb("Enter a url", null);
  } else if (!isUrl) {
    return cb("URl not valid", null);
  }

  const getUrl = JSON.parse(localStorage.getItem("urls")) || [];
  // check short url is already exist in localstorage
  if (getUrl?.length) {
    const findShortUrl = getUrl?.find((url) => url.longUrl === longUrl) || {};
    if (findShortUrl?.id) {
      return cb(null, findShortUrl);
    } else {
      window.location.hash = "";
    }
  }
  // generate random hash
  genHash();
  const hashh = window.location.hash.substring(1);
  const urlPath = new URL(longUrl);
  const shortUrl = "http://" + urlPath.hostname + "/" + hashh;
  const result = {
    id: hashh,
    shortUrl,
    longUrl,
    timestamp: Date.now(),
  };
  // add to localstorage shortUrl data
  localStorage.setItem("urls", JSON.stringify([...getUrl, result]));
  return cb(null, result);
};
export default getShortUrl;
