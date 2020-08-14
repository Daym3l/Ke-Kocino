import React, { useState, useEffect } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import _ from "lodash";
import { app } from "../../config/Firebase.config";
import { withSnackbar } from "notistack";

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
    backgroundImage: "url(/assets/img/singup.jpg)",
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
    color: theme.palette.white
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
    paddingLeft: 100,
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
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center"
  },
  policyCheckbox: {
    marginLeft: "-14px"
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignUp = props => {
  const { history, enqueueSnackbar } = props;

  const classes = useStyles();

  const [loading, setLoadingState] = useState(false);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = {};

    if (!formState.values.email) {
      errors.email = "El Campo es requerido";
    }
    if (!formState.values.password) {
      errors.password = "El Campo es requerido";
    }
    if (!formState.values.rpassword) {
      errors.rpassword = "El Campo es requerido";
    }
    if (formState.values.email && formState.values.email !== "") {
      if (!formState.values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
        errors.email = "Formato de correo invalido";
    }
    if (formState.values.rpassword && formState.values.password) {
      if (formState.values.password !== formState.values.rpassword) {
        errors.rpassword = "Las contraseñas son diferentes";
      }
    }

    setFormState(formState => ({
      ...formState,
      isValid: _.isEmpty(errors),
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleSignUp = event => {
    event.preventDefault();
    setLoadingState(true);
    app
      .auth()
      .createUserWithEmailAndPassword(
        formState.values.email,
        formState.values.password
      )
      .then(res => {
        setLoadingState(false);
        if(res){
          enqueueSnackbar("Usuario creado satisfactoriamente.", { variant: "success" });
          history.push("/query");
        }
       
      })
      .catch(error => {
        setLoadingState(false);
        enqueueSnackbar(error.message, { variant: "error" });
      });
  };

  const hasError = field => (formState.errors[field] ? true : false);

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={6}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography className={classes.quoteText} variant="h1">
                Bienvenido a Ke-kocino
              </Typography>
              <div className={classes.person}>
                <Typography className={classes.name} variant="h4">
                  Comienza a postear tus recetas ya.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={6} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form className={classes.form} onSubmit={handleSignUp}>
                <Typography className={classes.title} variant="h2">
                  Crear cuenta
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Crea tu cuenta para tener acceso a las recetas.
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError("email")}
                  fullWidth
                  helperText={hasError("email") && formState.errors.email}
                  label="Correo"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ""}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError("password")}
                  fullWidth
                  helperText={hasError("password") && formState.errors.password}
                  label="Contraseña"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ""}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError("rpassword")}
                  fullWidth
                  helperText={
                    hasError("rpassword") && formState.errors.rpassword
                  }
                  label="Repetir Contraseña"
                  name="rpassword"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.rpassword || ""}
                  variant="outlined"
                />

                <Button
                  className={classes.signUpButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  variant="contained"
                  onClick={handleSignUp}
                >
                  Crear
                </Button>
                <Typography color="textSecondary" variant="body1">
                  Ya tienes cuenta{" "}
                  <Link component={RouterLink} to="/" variant="h6">
                    Entrar
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(withSnackbar(SignUp));
