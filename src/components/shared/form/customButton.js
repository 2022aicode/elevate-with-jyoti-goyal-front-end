import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
  backgroundColor: "#E55E4B",
  "&:hover": {
    backgroundColor: "#E55E4B",
  },
}));

const CustomButton = (props) => {
  return (
    <>
      <ColorButton variant="contained">{props.label}</ColorButton>
    </>
  );
};

export default CustomButton;
