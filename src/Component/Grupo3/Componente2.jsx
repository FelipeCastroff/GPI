import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import CardMedia from "@material-ui/core/CardMedia";
import Calendar from 'react-calendar';
import Button from "@material-ui/core/Button";
import Inscribite from "./InscripcionComponent";
import Footer from "./Footer";


//import 'react-calendar/dist/Calendar.css';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Orange Hesit
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({

  img: {
    backgroundImage:
      "url(https://3718aeafc638f96f5bd6-d4a9ca15fc46ba40e71f94dec0aad28c.ssl.cf1.rackcdn.com/journal-sports-and-active-living.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
  },
  cardMedia: {
    paddingTop: "63.25%", // 16:9
  },
  cardMedia1: {
    width: 120, height: 150,


  },
  title: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#4054c7",
    padding: theme.spacing(2),
  },
  //appBarSpacer: theme.mixins.toolbar,// me genera el espcio en la wea
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 5, 6),

  },
  container: {

  },
  paper: {
    padding: theme.spacing(2),// espacio dentro de grid
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: { // ancho de las 2 primeras grid
    height: 777,
  },
}));

export default function Dashboard() {
  const classes = useStyles();


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment >
      <main>
        <div className={classes.root}>
          <CssBaseline />

          <Container  >
            <Grid container spacing={1}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={7}>
                <Paper className={fixedHeightPaper}>
                  <Typography variant="h2" align="left" color="primary" paragraph>
                    Deporte X
                </Typography>
                  <Typography variant="subtitle1" align="left" color="inherit" noWrap="">
                    Código actividad: 666
                </Typography>
                  <Typography variant="subtitle1" align="left" color="inherit" noWrap="">
                    Lugar: Villa las palmas, pasaje el maqui n°234.
                </Typography>
                  <Typography variant="subtitle1" align="left" color="inherit" noWrap="">
                    Implementación: implementación.
                </Typography>
                  <Typography variant="subtitle1" align="left" color="inherit" noWrap="">
                    Otros detalles: Detalle extenso.
                </Typography>

                  <br></br>

                  <Typography variant="body2" align="justify" color="inherit" paragraph>
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
              </Typography>
                  <Typography variant="body2" align="justify" color="inherit" paragraph>
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte
                    detalhes do esporte detalhes do esporte detalhes do esporte detalhes do esporte

              </Typography>
                  <br></br>
                  <Divider />
                  <br></br>
                  <Typography variant="h5" align="left" color="inherit" paragraph>
                    Datos del profesor.
                </Typography>

                  {/*<CardMedia
                    className={classes.cardMedia1}
                    image="https://source.unsplash.com/random"
                    title="Image title"
              />*/}


                  <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Nombre: Felipe Castro A
                </Typography>
                  <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Rut: 9.999.999-0
                </Typography>
                  <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Correo: felipe.castroa@alumnos.uv.cl
                </Typography>
                  <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Direccion: Melipilla.
                </Typography>
                  <Typography variant="subtitle2" align="left" color="inherit" noWrap="">
                    Numero: +56962967905
                </Typography>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={5}>
                <Paper className={fixedHeightPaper}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <br></br>
                  <Divider />
                  <br></br>
                  <Typography variant="h5" align="center" color="inherit" paragraph>
                    Horario
                </Typography>
                  <Calendar lign="center" />
                </Paper>
              </Grid>

            </Grid>

          </Container>
          <container>
            <h1 align="center">
              <Inscribite></Inscribite></h1></container>
        </div>
      </main>
      <Footer></Footer>
    </React.Fragment>

  );
}
