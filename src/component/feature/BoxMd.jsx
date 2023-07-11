import Box from "@mui/material/Box";

export default function BoxMd({ children, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        width: "24rem",
        height: "auto",
        backgroundColor: "#D1ECF1",
        transition: "0.8s ease-in-out",
        "&:hover": {
          backgroundColor: "#282A35",
          transition: "0.5s ease-in-out",
        },
      }}
    >
      {children}
    </Box>
  );
}
