import { useState } from "react";
import InputBox from "../feature/InputBox";
import SubmitButton from "../feature/SubmitButton";
import shortUrl from "../../utils/shortUrl";
import BoxMd from "../feature/BoxMd";

export default function Home() {
  const [error, setError] = useState(null);
  const [shortUrls, setShortUrls] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.input.value;
    shortUrl(url, (err, shortUrl) => {
      if (err) return setError(err);
      setError(null);
      setShortUrls(shortUrl);
    });
  };
  return (
    <div className="md:w-3/4 mx-auto">
      <div className="flex justify-center items-center flex-col mt-20">
        <form
          onSubmit={handleSubmit}
          className="flex justify-start items-start flex-col h-screen "
        >
          <h1 className="text-left w-full uppercase font-semibold mb-1.5">
            Short URL generator
          </h1>
          <InputBox
            name="input"
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
          {shortUrls && (
            <BoxMd className="my-5 rounded-xl shadow-md">
              <div className="flex justify-center flex-col items-center my-5 gap-y-3">
                <div className="w-80 bg-white py-3 px-1 overflow-x-auto">
                  <p className="font-semibold">Your Long URL:</p>
                  <span className="whitespace-nowrap">
                    <a
                      target="__blank"
                      className="hover:text-blue-500"
                      href={shortUrls?.longUrl}
                    >
                      {shortUrls?.longUrl}
                    </a>
                  </span>
                </div>
                <div className="w-80 bg-white py-3 px-1">
                  <p className="font-semibold">Your Short URL:</p>
                  <span>
                    <a
                      target="__blank"
                      className="hover:text-blue-500"
                      href={shortUrls?.longUrl}
                    >
                      {shortUrls?.shortUrl}
                    </a>
                  </span>
                </div>
              </div>
            </BoxMd>
          )}
        </form>
      </div>
    </div>
  );
}
