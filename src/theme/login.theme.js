import { createMuiTheme } from "@material-ui/core/styles";
import {  red,grey,yellow} from "@material-ui/core/colors";

export const themeLogin = createMuiTheme({
  palette: {
    primary: { main: grey[600] },
    secondary: {
      main: red[400],
      paper:yellow[200]
    }
  }
});
