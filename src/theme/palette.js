import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[500],
    light: colors.green[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[500],
    light: colors.red["A400"]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[500],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: black,
    dark: colors.yellow[900],
    main: colors.yellow[500],
    light: colors.yellow[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[500],
    light: colors.red[400]
  },
  text: {
    primary: colors.grey[900],
    secondary: colors.grey[600],
    link: colors.indigo[600]
  },
  action: {
    main: colors.grey[100]
  },
  background: {
    default:white,
    paper: white
  },
  icon: colors.grey[600],
  divider:colors.grey[300]
};
