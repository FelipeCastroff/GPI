import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ImageGridList() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Container fixed>
          <Typography variant="h2" gutterBottom>
            A ya creo que comprendo esta basura
          </Typography>
        </Container>
      </Container>
      <Container maxWidth="xl">
        <Grid container className={classes.root} spacing={2}>
          <Grid container justify="center" spacing="{spacing}">
            {[0, 1, 2].map((value) => (
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="Natacion"
                        src="https://ih1.redbubble.net/image.689468964.9430/flat,128x128,075,f-pad,128x128,f8f8f8.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          Natacion
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Taller de natacion aquabodyfullshark2.0
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Horario: 05:05 am - 8:00 am
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          href="https://www.youtube.com/watch?v=HzsL54jVVTA"
                        >
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Ver Taller!
                          </Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </Grid>
        Como separo bien esta basura ayuda
      </Container>
      <Container maxWidth="xl">
        <Grid container className={classes.root} spacing={2}>
          <Grid container justify="center" spacing="{spacing}">
            {[0, 1, 2].map((value) => (
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="Natacion"
                        src="https://media1.tenor.com/images/4abd353284874d5509171a251bd07ef3/tenor.gif?itemid=16090426"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          Volleyball
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Taller de Volleyball a lo jaiqiu manito aaa
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Horario: 20:00 pm - 22:00 pm
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          href="https://www.youtube.com/watch?v=S3l6Ky-3RuI"
                        >
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Ver Taller!
                          </Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Container>
      Ostia tio separadme bien esta pinche basura
      <Container maxWidth="xl">
        <Grid container className={classes.root} spacing={2}>
          <Grid container justify="center" spacing="{spacing}">
            {[0, 1, 2].map((value) => (
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="Natacion"
                        src="https://thumbs.gfycat.com/DimwittedPettyHarvestmouse-size_restricted.gif"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          Bailar a lo Gengar
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Taller de baile entretenido con gengar wn
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Horario: ??:?? am - ??:?? am
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          En: Torre Pokemon, Pueblo Lavanda
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          href="https://www.youtube.com/watch?v=ih9zBLDr_ro"
                        >
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            Ver Taller!
                          </Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </Grid>
        Como separo bien esta basura ayuda
      </Container>
      <Typography
        variant="h2"
        style={{ backgroundColor: "#374991", height: "30vh", color: "#FFFFFF" }}
      >
        Esta wea si me sale blanca
        <Typography variant="body1" gutterBottom>
          A ya creo que comprendo esta basura
        </Typography>
        <Container fixed>
          <Typography variant="body1" gutterBottom>
            <Link
              href="https://www.youtube.com/watch?v=podn2Szo1ls"
              color="inherit"
            >
              Deporte 1
            </Link>
          </Typography>
        </Container>
      </Typography>
    </React.Fragment>
  );
}
