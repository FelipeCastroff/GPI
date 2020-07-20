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
import Footer from "./Footer";
import img1 from "../../Model/Grupo3/Assets/FotosPacientes/paciente1.jpg";
import img2 from "../../Model/Grupo3/Assets/FotosPacientes/paciente2.jpg";
import img3 from "../../Model/Grupo3/Assets/FotosPacientes/paciente3.jpg";
import img4 from "../../Model/Grupo3/Assets/FotosPacientes/paciente4.jpg";
import img5 from "../../Model/Grupo3/Assets/FotosPacientes/paciente5.jpg";
import img6 from "../../Model/Grupo3/Assets/FotosPacientes/paciente6.jpg";
import img7 from "../../Model/Grupo3/Assets/FotosPacientes/paciente7.jpg";
import img8 from "../../Model/Grupo3/Assets/FotosPacientes/paciente8.jpg";
import img9 from "../../Model/Grupo3/Assets/FotosPacientes/paciente9.jpg";


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
const cartas = [1, 2, 3];
const kards = ["Me cago felipe weon","Me cago Lillo","Me cago Marco","Me cago Rusio","Me cago Tito","Me cago Nacho","Me cago Sofia","Me cago Jose","Me cago Yian"];
const imagenqla=[img1,img2,img3,img4,img5,img6,img7,img8,img9];

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
                    image= { imagenqla[card-1] }
                    title={"Image title" + card}
                  />
                  {/* <img src={img6} width="300px" height="300px"></img> */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Deporte{card}
                    </Typography>
                    <Typography>
                      Taller Deportivo: {kards[card-1]}
                    </Typography>
                    <Typography color="textSecondary">
                      Horario: Martes 
                    </Typography>                    
                    <Typography color="textSecondary">
                       15:50 pm - 16:30 pm
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small" color="primary">
                      <Link href = "/Grupo3/Vista2">Ver taller</Link>
                      </Button>
                      <Typography color="textSecondary">
                      Cupos: 10/20
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cartas.map((cartas) => (
              <Grid item key={cartas} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Deporte{cartas}
                    </Typography>
                    <Typography>
                      Taller Deportivo: 
                    </Typography>
                    <Typography color="textSecondary">
                      Horario: Martes 
                    </Typography>                    
                    <Typography color="textSecondary">
                       15:50 pm - 16:30 pm
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small" color="primary">
                      <Link href = "/Grupo3/Vista2">Ver taller</Link>
                      </Button>
                      <Typography color="textSecondary">
                      Cupos: 10/20
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer></Footer>
    </React.Fragment>
  );
}
