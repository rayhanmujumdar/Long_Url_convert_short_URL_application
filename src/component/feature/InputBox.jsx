import { TextField } from "@mui/material";

export default function InputBox({ label, ...props }) {
  return (
    <TextField
      {...props}
      id="outlined-basic"
      label={label}
      variant="outlined"
    />
  );
}
