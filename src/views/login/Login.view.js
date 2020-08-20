import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Typography
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import _ from "lodash";
import { app, googleAuthProvider } from "../../config/Firebase.config";
import { Auth } from "../../context/Auth.context";
import { withSnackbar } from "notistack";
import Loading from "../../components/loading/m.loading";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%"
  },
  grid: {
    height: "100%"
  },
  quoteContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(/assets/img/auth.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  quoteInner: {
    textAlign: "center",
    flexBasis: "600px"
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white,
    marginTop: 10
  },
  contentContainer: {},
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center"
    }
  },
  form: {
    paddingLeft: 110,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  },
  btn: {
    marginTop: 10,
    float: "right"
  },
  social: {
    marginLeft: "-30px",
    textAlign: "center"
  }
}));

const LoginView = ({ history, enqueueSnackbar, location }) => {
  const classes = useStyles();
  const { usuario, logout } = React.useContext(Auth);

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });
  const [loading, setLoading] = React.useState(false);
  function handlerTextChange(event) {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  }

  const handleBack = () => {
    history.goBack();
  };

  const handlerkeyPres = key => {
    if (key.charCode === 13) {
      login();
    }
  };
  const resetForm = () =>
    setFormState({
      isValid: false,
      values: {},
      touched: {},
      errors: {}
    });

  React.useEffect(() => {
    if (!_.isEmpty(formState.values)) {
      let errors = {};

      if (!formState.values.password) {
        errors.password = "El Campo es requerido";
      }
      if (!formState.values.email) {
        errors.email = "El Campo es requerido";
      }
      if (formState.values.email && formState.values.email !== "") {
        if (
          !formState.values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        )
          errors.email = "Formato de correo invalido";
      }

      setFormState(formState => ({
        ...formState,
        isValid: _.isEmpty(errors) ? true : false,
        errors: errors || {}
      }));
    }
  }, [formState.values]);

  React.useEffect(() => {
    if (usuario) {
      history.push("/kekocino/query");
    }
  }, [history, usuario]);

  async function login() {
    setLoading(true);
    await app
      .auth()
      .signInWithEmailAndPassword(
        formState.values.email,
        formState.values.password
      )
      .then(res => {
        setLoading(false);
        if (res) {
          history.push("/");
        }
      })
      .catch(error => {
        setLoading(false);
        enqueueSnackbar(error.message, {
          variant: "error"
        });
        resetForm();
      });
  }

  async function loginSocial(provider) {
    await app
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        setLoading(false);
        if (res) {
          history.push("/");
        }
      })
      .catch(error => {
        setLoading(false);
        enqueueSnackbar(error.message, {
          variant: "error"
        });
        resetForm();
      });
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Typography className={classes.root}>
      <Loading blocking={loading} />
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={6}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography className={classes.quoteText} variant="h1">
                Ke-kocino
              </Typography>
              <Typography
                className={classes.quoteText}
                variant="h3"
                gutterBottom
              >
                Todas tus recetas en un solo lugar.
              </Typography>
            </div>
          </div>
          {/* <a href="http://www.freepik.com">Designed by Freepik</a> */}
        </Grid>
        <Grid className={classes.content} item lg={6} xs={12}>
          <Typography className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <Typography className={classes.contentBody}>
              <div className={classes.form}>
                <Typography className={classes.title} variant="h2">
                  No sabes que cocinar con los ingredientes que tienes?
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Aqui encontraras todo tipo de recetas, creadas por cocineros
                  amateurs como tú, asi que no dudes en registrarte y compartir
                  tu recetas.
                </Typography>
                <Grid className={classes.socialButtons} container spacing={2}>
                  <Grid item>
                    <Button
                      color="primary"
                      onClick={() => history.push("/singup")}
                      size="small"
                      variant="contained"
                    >
                      Registrarse
                    </Button>
                  </Grid>
                </Grid>

                <TextField
                  className={classes.textField}
                  error={hasError("email")}
                  fullWidth
                  helperText={hasError("email") ? formState.errors.email : null}
                  label="correo"
                  name="email"
                  onChange={handlerTextChange}
                  type="text"
                  value={formState.values.email || ""}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError("password")}
                  fullWidth
                  helperText={
                    hasError("password") ? formState.errors.password : null
                  }
                  label="Contraseña"
                  name="password"
                  onChange={handlerTextChange}
                  type="password"
                  value={formState.values.password || ""}
                  onKeyPress={handlerkeyPres}
                  variant="outlined"
                />
                <Grid container spacing={2}>
                  <Grid item lg={6}>
                    <Button
                      className={classes.signInButton}
                      color="primary"
                      disabled={!formState.isValid}
                      fullWidth
                      onClick={login}
                      size="large"
                      variant="contained"
                    >
                      Entrar
                    </Button>
                  </Grid>
                  <Grid item lg={6}>
                    <Button
                      className={classes.signInButton}
                      color="secondary"
                      fullWidth
                      onClick={() => loginSocial(googleAuthProvider)}
                      size="large"
                      variant="contained"
                    >
                      Google
                    </Button>
                  </Grid>
                </Grid>

                <Button color="primary" simple size="small" onClick={() => {}}>
                  Olvide mi contraseña
                </Button>
              </div>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Typography>
  );
};
export default withRouter(withSnackbar(LoginView));
