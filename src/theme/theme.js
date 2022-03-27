import { createTheme } from "@material-ui/core";
import {blue, orange } from "@material-ui/core/colors";

const theme = createTheme({
    status: {
      danger: orange[500],
    },
    palette: {
      primary: blue
    }
  });

  export default theme