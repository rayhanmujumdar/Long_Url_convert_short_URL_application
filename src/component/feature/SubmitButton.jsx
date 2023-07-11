import { Button } from "@mui/material";

export default function SubmitButton({children,...props}) {
  
  return (
    <Button {...props} variant="contained" color="success">
      {children}
    </Button>
  );
}
