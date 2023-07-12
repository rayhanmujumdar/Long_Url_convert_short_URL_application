import React, { useState } from "react";
import InputBox from "./InputBox";
import SubmitButton from "./SubmitButton";

export default function UpdateUrl({ url, render, setOpen, setRender }) {
  const { id, longUrl, shortUrl } = url;
  const [modifyUrl, setModifyUrl] = useState(longUrl);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateLink = e.target.input.value;
    const getUrls = JSON.parse(localStorage.getItem("urls"));
    const remainingUrls = getUrls.filter((url) => url.id !== id);
    const updateUrl = {
      id,
      longUrl: updateLink,
      shortUrl,
      timestamp: Date.now(),
    };
    localStorage.setItem("urls", JSON.stringify([...remainingUrls, updateUrl]));
    setOpen(false);
    setRender(!render);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-start items-start flex-col"
    >
      <h1 className="text-left w-full uppercase font-semibold mb-1.5">
        Short URL generator
      </h1>
      <InputBox
        onChange={(e) => setModifyUrl(e.target.value)}
        value={modifyUrl}
        name="input"
        label={"LONG URL"}
        className="w-full"
        autoComplete="off"
      ></InputBox>
      <SubmitButton type="submit" style={{ marginTop: "10px" }}>
        Submit
      </SubmitButton>
    </form>
  );
}
