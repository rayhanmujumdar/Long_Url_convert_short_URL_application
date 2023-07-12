import BoxMd from "./BoxMd";
// import {Delete} from "@mui/icons-material"

export default function UrlItem({ longUrl, shortUrl }) {
  return (
    <BoxMd className="my-5 rounded-xl shadow-md">
      <div className="flex justify-center flex-col items-center my-5 gap-y-3">
        <div className="w-80 bg-white py-3 px-1 overflow-x-auto">
          <p className="font-semibold">Your Long URL:</p>
          <span className="whitespace-nowrap">
            <a target="__blank" className="hover:text-blue-500" href={longUrl}>
              {longUrl}
            </a>
          </span>
        </div>
        <div className="w-80 bg-white py-3 px-1">
          <p className="font-semibold">Your Short URL:</p>
          <span>
            <a target="__blank" className="hover:text-blue-500" href={longUrl}>
              {shortUrl}
            </a>
          </span>
        </div>
        <div className="w-80 py-3 px-1">
            
        </div>
      </div>
    </BoxMd>
  );
}
