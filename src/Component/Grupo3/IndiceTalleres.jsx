import React from "react";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  img: {
    backgroundImage:
      "url(https://3718aeafc638f96f5bd6-d4a9ca15fc46ba40e71f94dec0aad28c.ssl.cf1.rackcdn.com/journal-sports-and-active-living.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="xl" img className={classes.img}>
            <Container maxWidth="md">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="Primary"
                gutterBottom
              >
                Talleres de Deportes
              </Typography>
              <Typography variant="h5" align="center" color="inherit" paragraph>
                Escoge el taller deportivo que más te guste y acomode, sientete
                libre de escoger y no olvides de asistir a los horarios de cada
                clase!
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                Mira y Escoge alguno de los siguientes talleres, ten presente
                los horarios y los cupos de cada uno!
              </Typography>
              <Typography variant="h4" align="center" color="Primary" paragraph>
                ¡Te estaremos esperando!
              </Typography>
            </Container>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Deporte1
                    </Typography>
                    <Typography>
                      Taller Deportivo: Descripcion general de contenido del
                      taller
                    </Typography>
                    <Typography color="textSecondary">
                      Horario: 15:50 pm - 16:30 pm
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver Taller
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h5" align="center" gutterBottom color="Primary">
          Links Rapidos!
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          <Link color="textSecondary" href="https://www.uv.cl">
            Universidad de Valparaiso
          </Link>
        </Typography>{" "}
        <Typography variant="subtitle1" align="center" component="p">
          <Link color="textSecondary" href="../../Home">
            Home
          </Link>
        </Typography>{" "}
        <Typography variant="subtitle1" align="center" component="p">
          <Link color="textSecondary" href="./Login">
            Profesores
          </Link>
        </Typography>
      </footer>
    </React.Fragment>
  );
}
