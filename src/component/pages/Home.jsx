import { useState } from "react";
import InputBox from "../feature/InputBox";
import SubmitButton from "../feature/SubmitButton";
import shortUrl from "../../utils/shortUrl";
import genHash from "../../utils/genHash";

export default function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [shortUrls, setShortUrls] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const shortUrls = shortUrl(url, (err, validUrl) => {
      if (err) return setError(err);
      setError(null);
      const getUrl = JSON.parse(localStorage.getItem("urls")) || [];
      if (getUrl?.length) {
        const findShortUrl = getUrl?.find((url) => url.longUrl === validUrl) || {};
        if (findShortUrl?.id) {
          return findShortUrl;
        } else {
          window.location.hash = "";
        }
      }
      genHash();
      const hashh = window.location.hash.substring(1);
      const shortUrl = "http://shortUrl" + "/" + hashh;
      const result = {
        id: hashh,
        shortUrl,
        longUrl: validUrl,
      };
      localStorage.setItem("urls", JSON.stringify([...getUrl, result]));
      return result;
    });
    // console.log(shortUrls);
    setShortUrls(shortUrls);
  };
  console.log(shortUrls);

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <div>
        <p>
          Short url: {" "}
          <a target="__blank" href={shortUrls?.longUrl}>{shortUrls?.shortUrl}</a>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-start items-start flex-col h-screen "
      >
        <h1 className="text-left w-full uppercase font-semibold mb-1.5">
          Short URL generator
        </h1>
        <InputBox
          onChange={(e) => setUrl(e.target.value)}
          label={"LONG URL"}
          className="w-96"
          autoComplete="off"
        ></InputBox>
        {error && (
          <p className="text-sm uppercase pt-1 text-red-400">{error}</p>
        )}
        <SubmitButton type="submit" style={{ marginTop: "10px" }}>
          Submit
        </SubmitButton>
      </form>
    </div>
  );
}
