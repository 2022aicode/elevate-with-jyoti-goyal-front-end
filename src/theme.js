import { createTheme } from "@mui/material";


export default createTheme({
  typography: {
    fontFamily: ["Open_Sans"].join(","),
    fontSize: 20
  },
  components: {
    // Name of the component
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          boxShadow: "none",
          backgroundColor: "transparent",
          color: "#000 !important",
        },
      },
    },
  },
});
