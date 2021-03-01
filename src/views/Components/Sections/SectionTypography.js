import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <h2>Preguntas Frecuentes</h2>
          </div>
          <GridContainer>
             
            <div className={classes.typo}>
              <div className={classes.note}>Pregunta 1</div>
              <h3>¿Fecha de Postulaciones?</h3>
            </div>

            <div className={classes.typo}>
              <div className={classes.note}>Respuesta</div>
              <Danger>
              Primera semana de marzo de cada año.
              </Danger>
            </div>

            <div className={classes.typo}>
              <div className={classes.note}>Pregunta 2</div>
              <h3>¿Es gratuita?</h3>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Respuesta</div>
              <Danger>
                Sí, gratuita.
              </Danger>
              </div>

              <div className={classes.typo}>
              <div className={classes.note}>Pregunta 3</div>
              <h3>¿Cuántos cursos puede tomar un estudiante?</h3>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Respuesta</div>
              <Danger>
                Solo uno.
              </Danger>
              </div>

              <div className={classes.typo}>
              <div className={classes.note}>Pregunta 4</div>
              <h3>¿Las clases se realizan en grupo?</h3>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Respuesta</div>
              <Danger>
              La mayoría de las clases son individuales, excepto las clases teóricas que son grupales, pero on-line.
              </Danger>
              </div>

              <div className={classes.typo}>
              <div className={classes.note}>Pregunta 5</div>
              <h3>¿Desde qué edad se pueden tomar los cursos?</h3>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Respuesta</div>
              <Danger>
              Desde los 4 años en adelante, sin tope de edad. Niñ@s, Jóvenes, Adultos y Adultos Mayores pueden participar.
              </Danger>
              </div>

              <div className={classes.typo}>
              <div className={classes.note}>Pregunta 6</div>
              <h3>¿En qué horarios se realizan las clases?</h3>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Respuesta</div>
              <Danger>
              Entre 9ºº y 21ºº horas de Lunes a Sábado.
              </Danger>
              </div>

              <div className={classes.typo}>
              <div className={classes.note}>Pregunta 7</div>
              <h3>¿En qué formato se realizarán las clases por la pandemia?</h3>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Respuesta</div>
              <Danger>
              Las clases se realizarán en modalidad presencial, ya que son individuales y contamos con las medidas de seguridad correspondientes. 
              Si existiese alguna restricción continuaremos en modalidad on-line.
              </Danger>
              </div>

              <div className={classes.typo}>
              <div className={classes.note}>Pregunta 8</div>
              <h3>¿Las clases son solo para personas de Quilicura?</h3>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}>Respuesta</div>
              <Danger>
              Sí. Se prioriza a los residentes de la comuna.
              </Danger>
              </div>                        
          </GridContainer>
        </div>
        
        <div className={classes.space50} />
      </div>
    </div>
  );
}
