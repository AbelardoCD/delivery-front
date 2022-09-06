import * as React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#faf7f6",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};
const colors = {
  50: "#f15f370",
  100: "#4d966d",
};
const StyledInputElement = styled("input")(
  ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 5px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    /*box-shadow: 0px 4px 30px ${
      theme.palette.mode === "dark" ? grey[900] : grey[200]
    };*/
  
    &:hover {
      border-color: ${colors[100]};
    }
  
    &:focus {
      border-color: ${colors[100]};
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[500] : colors[100]
      };
    }
  `
);

const CustomInput = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

export default CustomInput;
