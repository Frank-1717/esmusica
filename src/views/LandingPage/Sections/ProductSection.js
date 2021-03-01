import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import dir1 from "assets/img/faces/dir.jpg";
import dir2 from "assets/img/faces/dir2.jpeg";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Dirección</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={dir1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Franco Toro
                <br />
                <small className={classes.smallTitle}>Director</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Estudió Flauta Traversa en la U de Chile, Saxofón y Composición en la Escuela Moderna de Música y I.P. Projazz, 
                Pedagogía en Artes Musicales en la Universidad Mayor. Ha trabajado realizando clases en distintos 
                establecimientos educacionales como la Escuela Escritor Pablo Neruda, Mary Anne School, Liceo Experimental Artístico, 
                Instituto Profesional La Araucana, entre otros. Como intérprete ha trabajado realizando música para obras de Teatro y 
                participado en Bandas de distintos estilos musicales como Jachawara, Transporte Urbano y Banda Dignidad, 
                recorriendo el país y gran parte de latinoamérica. Desde el año 2009 toma la dirección de la Escuela de Música Enrique Soro 
                de Quilicura, levantando la enseñanza instrumental municipal a otro nivel, desarrollando un trabajo con un gran equipo 
                de alto impacto cultural en la Región.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={dir2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Liliana Palacios
                <br />
                <small className={classes.smallTitle}>Secretaria</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Estudió Secretariado en el Instituto INSEC. Ha realizado cursos Relaciones Humanas, Inteligencia Emocional.
                Iniciación en Flauta Traversa en la Escuela de Música Enrique Soro.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
