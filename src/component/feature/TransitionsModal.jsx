import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    md: 450,
    xs: 400
  },
  bgcolor: "background.paper",
  border: "1px solid #0000",
  boxShadow: 24,
  p: 4,
};
export default function TransitionsModal({
  open,
  setOpen,
  children,
  ...props
}) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box {...props} sx={style}>
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
