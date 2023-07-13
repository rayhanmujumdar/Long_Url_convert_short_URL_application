import { useState, useEffect } from "react";
import UrlItem from "../feature/UrlItem";

export default function UrlList() {
  const [render, setRender] = useState(false);
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const urlItems = JSON.parse(localStorage.getItem("urls")) || [];
    setUrls(urlItems);
  }, [render]);
  let content = null;
  if (urls.length === 0) {
    content = <p className="text-red-500">Not Found</p>;
  } else if (urls?.length > 0) {
    content = urls
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((url) => (
        <UrlItem
          key={url.id}
          url={url}
          setRender={setRender}
          render={render}
        ></UrlItem>
      ));
  }
  return (
    <div className="md:container mx-auto">
      <h1 className="text-2xl font-semibold text-center my-3">
        Short URL List
      </h1>
      <div className="flex flex-col justify-center items-center gap-y-4 my-5">
        {content}
      </div>
    </div>
  );
}
