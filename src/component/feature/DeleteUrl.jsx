import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function DeleteUrl({
  setRender,
  setOpenRemoveModal,
  render,
  id,
}) {
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    if (deleted) {
      const getAllUrls = JSON.parse(localStorage.getItem("urls"));
      const remainingUrls = getAllUrls.filter((url) => url.id !== id);
      localStorage.setItem("urls", JSON.stringify(remainingUrls));
      setOpenRemoveModal(false);
      setRender(!render);
    }
  }, [deleted]);
  return (
    <>
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h2"
        pb="10px"
      >
        Are You sure?
      </Typography>
      <Box sx={{ display: "flex", gap: "3px" }}>
        <Button
          onClick={() => setDeleted(true)}
          variant="outlined"
          color="success"
        >
          Yes
        </Button>
        <Button
          onClick={() => {
            setOpenRemoveModal(false);
            setDeleted(false);
          }}
          variant="outlined"
          color="warning"
        >
          No
        </Button>
      </Box>
    </>
  );
}
