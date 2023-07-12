import BoxMd from "./BoxMd";
import { Delete, Edit } from "@mui/icons-material";
import TransitionsModal from "./TransitionsModal";
import { useState } from "react";
import DeleteUrl from "./DeleteUrl";
import UpdateUrl from "./UpdateUrl";

export default function UrlItem({ url, setRender, render }) {
  const { id, longUrl, shortUrl } = url;
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  return (
    <BoxMd className="py-4 rounded-xl shadow-md">
      <div className="flex justify-center flex-col items-center my-5 gap-y-3">
        {/* long url */}
        <div className="w-80 bg-white py-3 px-1 overflow-x-auto">
          <p className="font-semibold">Your Long URL:</p>
          <span className="whitespace-nowrap">
            <a target="__blank" className="hover:text-blue-500" href={longUrl}>
              {longUrl}
            </a>
          </span>
        </div>
        {/* short url */}
        <div className="w-80 bg-white py-3 px-1">
          <p className="font-semibold">Your Short URL:</p>
          <span>
            <a target="__blank" className="hover:text-blue-500" href={longUrl}>
              {shortUrl}
            </a>
          </span>
        </div>
        {/* edit or delete  icons*/}
        <div className="w-40 rounded-md bg-white  py-3 px-1 flex justify-center items-center gap-x-2">
          <Delete
            onClick={() => setOpenRemoveModal(true)}
            sx={{
              color: "white",
              backgroundColor: "red",
              width: "40px",
              height: "40px",
              fontSize: "2px",
              padding: "5px",
              borderRadius: "50px",
              transition: "0.5s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transition: "0.5s ease-in-out",
                backgroundColor: "white",
                color: "red",
              },
            }}
          ></Delete>
          <Edit
            onClick={() => setOpenEditModal(true)}
            sx={{
              color: "white",
              backgroundColor: "green",
              width: "40px",
              height: "40px",
              fontSize: "2px",
              padding: "5px",
              borderRadius: "50px",
              transition: "0.5s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                transition: "0.5s ease-in-out",
                backgroundColor: "white",
                color: "green",
              },
            }}
          ></Edit>
        </div>
        {/* Modal */}
        <div>
          {/* delete url item Modal */}
          <TransitionsModal open={openRemoveModal} setOpen={setOpenRemoveModal}>
            <DeleteUrl
              id={id}
              setOpenRemoveModal={setOpenRemoveModal}
              setRender={setRender}
              render={render}
            ></DeleteUrl>
          </TransitionsModal>
          {/* Update url item Modal */}
          <TransitionsModal open={openEditModal} setOpen={setOpenEditModal}>
            <UpdateUrl
              url={url}
              setOpen={setOpenEditModal}
              setRender={setRender}
              render={render}
            ></UpdateUrl>
          </TransitionsModal>
        </div>
      </div>
    </BoxMd>
  );
}
