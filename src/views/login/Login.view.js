import React from "react";
import { loginStyles } from "../../helpers/Styles.helper";
import { makeStyles } from "@material-ui/core/styles";

import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Grid,
  Link,
  Checkbox,
  Button
} from "@material-ui/core";
import NotesIcon from "@material-ui/icons/Assistant";

const useStyles = makeStyles(loginStyles);

const LoginView = props => {
  const classes = useStyles();
  const { history } = props;

  const [loginData, setLoginData] = React.useState({ email: "", password: "" });
  function handlerTextChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function login() {
    if (
      loginData.email === "webmaster@coreplus.com" &&
      loginData.password === "123"
    ) {
      history.replace("/query");
    } else {
      history.replace("/");
    }
  }
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <NotesIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sing In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handlerTextChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlerTextChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={login}
            >
              Sign In
            </Button>
            <Grid container className={classes.padding}>
              <Grid item xs>
                <Link className={classes.link} href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} href="#" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default LoginView;
