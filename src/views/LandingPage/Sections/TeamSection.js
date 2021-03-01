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

import team1 from "assets/img/faces/Daniel_Castillo.jpg";
import team2 from "assets/img/faces/Cristian_Orozco.jpg";
import team3 from "assets/img/faces/Paula_Perales.jpg";
import team4 from "assets/img/faces/Felipe_Monroy.jpg";
import team5 from "assets/img/faces/Felipe_Rivera.jpg";
import team6 from "assets/img/faces/Margarita_Soto.jpg";
import team7 from "assets/img/faces/Matias_Nunez.jpg";
import team8 from "assets/img/faces/Lilian_Vergara.jpg";
import team9 from "assets/img/faces/Giovanni_Raggi.jpg";
import team10 from "assets/img/faces/Fernando_Romero.jpg";
import team11 from "assets/img/faces/Fernando_Godoy.jpg";
import team12 from "assets/img/faces/Luis_Silva.jpg";
import team13 from "assets/img/faces/Osvaldo_Sazo.jpg";
import team14 from "assets/img/faces/Daniela_Antipan.jpeg";
import team15 from "assets/img/faces/Alain_Baez.jpeg";
import team16 from "assets/img/faces/Alexis_Salazar.jpg";
import team17 from "assets/img/faces/Andrea_Sepulveda.jpeg";
import team18 from "assets/img/faces/Cristofer_Aguilar.JPG";
import team19 from "assets/img/faces/Roberto_Morales.jpg";
import team20 from "assets/img/faces/Rodrigo_Valenzuela.jpeg";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Profesores</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Daniel Castillo
                <br />
                <small className={classes.smallTitle}>Profesor de Violín</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                26 años, Licenciado en Música de la (UMCE)
                con diplomado en dirección de orquestas juveniles e infantiles (UAH) 
                Músico violinista, profesor de violín, ha realizado clases de violín durante más de 10 años.
                Dirigió el concierto sinfónico con la banda Los Jaivas y la Orquesta Enrique Soro en el año 2019,
                se ha perfeccionado en diversos seminarios y cursos de dirección con variados maestros
                nacionales e internacionales y en el año 2020 realiza pasantía de estudios de dirección orquestal
                con el maestro Rodolfo Fischer en Basel -Suiza, París- Francia, Baden Baden - Alemania y Málaga- España
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
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Paula Perales
                <br />
                <small className={classes.smallTitle}>Profesora de Fagot</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                  
                  Realizó sus estudios en la Universidad Nacional de Cuyo, Mendoza, Argentina. 
                  Desde el año 2019 la Escuela de Música Enrique Soro. Su trabajo
                  consiste en familiarizarse con el instrumento desde el armado y cuidados básicos hasta la
                  interpretación de obras tanto de cámara como solistas, contemplando también el estudio
                  técnico con bibliografía adecuada para las necesidades de cada estudiante.
                  Tambipen, se orienta con el armado y raspado de cañas.
                  El principal interés de la cátedra es que el aprendizaje del fagot sea un disfrute
                  para el estudiante y que las herramientas entregadas les sean útiles para desenvolverse en
                  los diversos intereses musicales que cada uno tenga.
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
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Cristian Orozco
                <br />
                <small className={classes.smallTitle}>Profesor de Canto y Vocal</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  29 años
                  Coach Certificado, con estudios de Pedagogía en Música (UAH).
                  Posee un Diploma Técnico en Musicoterapia de la Univ. de Montemorelos, México. Cursos de perfeccionamiento musical en Berklee College of Music modalidad online y mejoras de enseñanza en el aula en la Universidad Católica de Chile.
                  Encargado de la Cátedra de Canto, 
                  Director de Coros Adulto e Infantil desde 2016 en Escuela de Música Enrique Soro.
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

          <GridItem xs={12} sm={12} md={4}>
          <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Felipe Monroy
                <br />
                <small className={classes.smallTitle}>Profesor de Trombón</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  
                  Estudiante de interpretación musical con mención en Trombón (UdCh).
                  Músico multiuntrumentista, profesor de Trombón desde hace 7 años. Ha participado en distintas
                  agrupaciones en su carrera musical, como la orquesta sinfónica estudiantil metropolitana (OSEM)
                  hasta distintas agrupaciones de la nueva cumbia chilena como La Shimbombo, La Sonora 5 Estrellas,
                  La Rumba del Flow. Perfeccionándose en múltiples encuentros de Trombón, nacionales e internacionales.

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
                <img src={team5} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Felipe Rivera
                <br />
                <small className={classes.smallTitle}>Profesor de Violín</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  
                  Comenzó sus estudios de Intérprete Musical Mención Violín en la Universidad Austral de Chile en Valdivia llegando a la etapa superior, para luego continuar sus estudios con diversos profesores en distintas ciudades del país, haciendo también clases en diferentes talleres y escuelas de música en estas ciudades.
                  Ha sido integrante de diferentes orquestas de nuestros país tales como la Orquesta Sinfónica Nacional Juvenil de Chile, Orquesta de Cámara del Teatro Municipal de Santiago, Orquesta Filarmonica de Providencia y Orquesta del Teatro Municipal de Temuco.
                  Con estas orquestas ha realizado giras por Alemania, Austria, España, Eslovaquia, República Checa, Perú y a lo largo de todo nuestro país y en las cuales ha tocado bajo la dirección de directores tales como Zubin Mehta, Plácido Domingo y Paavo Järvi, entre otros.  
                   
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
                <img src={team6} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Margarita Soto
                <br />
                <small className={classes.smallTitle}>Profesora de Oboe</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  
                  Oboísta y estudiante de Pedagogía en educación musical en la Universidad Tecnológica
                  de Chile INACAP
                  Posee estudios en oboe en la Escuela de Música J. S Bach de Valdivia, de Interpretación Superior Mención Oboe 
                  en la Pontificia Universidad Católica de Chile
                  y en 2016 ingresa a la carrera de Pedagogía en Música en la UTC Inacap.
                  Con la vista puesta en ser un aporte para la música y la pedagogía a lo largo del país,
                  impulsó el primer Seminario de “Estrategias de dirección, ensayo y pedagogía orquestal” junto a
                  la directora Gabrielle Smith de la Universidad de McGill (Canadá) y la creación del primer
                  “Ensamble latinoamericano de estudiantes” en INACAP.
                  Dentro de sus proyectos está la idea de fomentar el aprendizaje del oboe en personas de
                  diferentes lugares y edades.
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
                <img src={team7} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Matías Nuñez
                <br />
                <small className={classes.smallTitle}>Profesor de Piano</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  
                  24 años. Músico estudiante de composición y pianista originario de la 
                  escuela de música Enrique Soro, con gran participación en varias agrupaciones 
                  de distintos formatos y estilos musicales, compartiendo escenario junto a connotados 
                  artistas nacionales.
                  Cuenta con 3 años de experiencia realizando clases de piano abordando 
                  elementos de la enseñanza clásica y popular, puliendo la técnica y la versatilidad 
                  del instrumento como solista o acompañante."
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
                <img src={team8} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                LiLian Vergara
                <br />
                <small className={classes.smallTitle}>Profesora de Estimulación Temprana</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  
                  Educadora de Párvulos (I.P. Los Leones), con formación en el método Música en colores. Cuenta
                  cuentos musicales. Se ha especializado en diversos cursos, charlas y talleres enfocados en la
                  educación musical y artística para la primera infancia: La música en la pedagogía Waldorf (Nueva
                  Semilla Talleres Pedagógicos), Sonoterapia Infantil (Yoga Kiddy Adacemy), Música y Artes
                  integradas en la infancia (Agua de Sol, Argentina), Principio pedagógico del Juego y las artes
                  (Despertar Musical), Introducción en el arte de contar cuentos (Fundación Mustakis), entre otros.
                  Participante del coro Allegro y de la Gran Orquesta de la escuela de música Enrique Soro, donde
                  también ha estudiado diversos instrumentos como piano, canto, ukelele y violoncello.
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
                <img src={team9} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Giovanni Raggi
                <br />
                <small className={classes.smallTitle}>Profesor de Bajo</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                 
                  
                Estudió composición musical en IP Projazz e interpretación en bajo eléctrico en la Escuela Superior de Jazz.
                Dentro de su trayectoria destaca ser el ganador del concurso nacional de bajistas “Ibáñez Bass Experiencie 2013” 
                con una composición propia para bajo solista y como sesionista ha colaborado con algunos artistas.
                Como docente lleva alrededor de 10 años dictando clases particulares, realizó ayudantías 
                y reemplazos de armonía y bajo eléctrico en la Escuela Superior de Jazz, 
                fue profesor de Teoría y Composición Musical en la Escuela Jiwasa Jatiña 
                y actualmente es profesor de bajo eléctrico en la "Escuela de bajistas chile" 
                y en la "Escuela de música Enrique Soro". 
                A su vez pertenece a “Ápside”, agrupación de jazz fusión donde compone e interpreta 
                el bajo presentando su música en festivales y clubes de jazz. 
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
                <img src={team10} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Fernando Romero
                <br />
                <small className={classes.smallTitle}>Profesor de Trompeta</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                 
                  
                  Trompetista, comenzó sus estudios de trompeta a los 12 años donde rápidamente va
                  conociendo el ambiente musical con diversas bandas bailables y otros estilos. Comienza sus
                  estudios formales de la trompeta en la Universidad de Chile (2006-2009). Luego de este
                  tiempo, sigue sus estudios con distintos maestros de manera particular. Durante estos años de
                  carrera ha podido integrar una gran variedad de bandas y acompañar a varios artistas tanto
                  nacionales como internacionales, además de participar como trompetista en variados
                  festivales del país.
                  Gracias al amplio conocimiento de estilos que adoptó a través de los años, se ha podido
                  desenvolver tanto en ambiente popular, clásico y folclórico. Actualmente se desempeña como
                  trompetista en la obra de teatro “La Negra Ester” de la compañía El Gran circo Teatro.
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
                <img src={team11} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Fernando Godoy
                <br />
                <small className={classes.smallTitle}>Profesor de Guitarra</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                 
                  
                  Productor y Compositor de música popular.
                  Tiene estudios de guitarra clásica y canto popular.
                  Estudió pedagogía en música en la Universidad de Playa Ancha, Valparaíso.
                  Fue músico del elenco del ballet folclórico de chile (bafochi) con presentaciones en España, Francia, Suiza, Bélgica, Portugal, Italia y Alemania.
                  Trabajó en arreglos del disco ganador del grammy latino “los tigres del norte and friends, mtv unplugged”
                  Escribe y compone para distintas agrupaciones y cantantes en chile y en el extranjero.
                  Es director musical de la agrupación rock pop “quilicanta” de la Escuela de Música Enrique Soro.
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
                <img src={team12} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Luis Silva
                <br />
                <small className={classes.smallTitle}>Profesor de Batería</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                 

                  57 años, baterista, profesor de batería, ha realizado clases durante 18 años en la orquesta estudiantil CODEDUC de Maipú, hace 12 años es el profesor de batería de la Escuela municipal de Música Enrique Soro de Quilicura, también impartió talleres de percusión en diversos programas sociales en las comunas de San Ramón, Peñalolen y Pedro Aguirre Cerda.
                  Realizó estudios con los Maestros Carlos Figueroa Lopez, Sergio "Tilo" Gonzalez, Ricardo Ruiz Fernandez, Pedro Barahona Espinoza.
                  Se ha perfeccionado en seminario de percusión con el Maestro Gerardo Salazar y clases con Gad Xoyon.
                  Ha participado en diversas agrupaciones entre las que destacan Transporte Urbano, Bluseros Muertos, La Pe.
                  Encargado de la fila de percusión de la orquesta Enrique Soro, entre sus multiples presentaciones destacan el concierto sinfónico junto a los Jaivas y la gira a Mendoza - Argentina.  
                   
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
                <img src={team13} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Osvaldo Sazo
                <br />
                <small className={classes.smallTitle}>Profesor de Percusión</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                 

                  7 años, percusionista multi instrumentista, intérprete en Jazz, música popular y
                  afrolatina.
                  Inició sus estudios formales de batería en la escuela municipal de música Enrique Soro y comenzó
                  su formación de batería jazz con el músico Álvaro Segovia (profesor de la escuela “Conchalí Big
                  Band”), continuo sus estudios en la UMCE y Escuela Superior de Jazz, complementando sus
                  conocimientos con músicos de Jazz nacionales como: Como Carlos Cortés y Félix Lécaros.
                  En Percusión Latina se ha especializado en la percusión afro peruana y afro cubana, formándose
                  con el maestro Marcos Mosquera (Perú), Humberto Durán (Chile) y David Ortega (cuba).
                  Realizando las cátedras de Cajón peruano, Tumbadoras y timbal Latino en la escuela Enrique Soro
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
                <img src={team14} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Daniela Antipan 
                <br />
                <small className={classes.smallTitle}>Profesora de Violín</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                 

                Violinista, con estudios de interpretación musical en el Conservatorio de la Universidad mayor.
                 Ha participado en diversos encuentros musicales de música folk-moderna 
                 con el grupo Mehidal, participó en la gira Victor Jara Sinfónico en el año 2018 
                 Montreál (Canadá). Realizó clases en proyectos de orquestas juveniles e infantiles. 
                 (Corporación cultural de Lo Prado- Barrancas), Instituto de las Artes Chile e 
                 Instituto de Música y Sonido.
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
                <img src={team15} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Alain Báez
                <br />
                <small className={classes.smallTitle}>Profesor de Flauta Traversa</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                 

                  36 años, Sus inicios en la música fueron a los 12 años en la Escuela de Música
                  Enrique Soro. Ingresó al Liceo Experimental Artístico comenzando sus estudios formales en
                  Flauta Traversa. Ha participado en diversos cursos con maestros como Hernán Jara, Lars
                  Nilson, Alberto Almarza. Participó en la Fundación de Orquestas Infantiles y Juveniles, FOJI. Ha
                  participado en varios grupos abarcando lo clásico y música popular. Participa activamente en
                  las actividades musicales de la Escuela presentandose en distintos escenarios, tanto en Chile
                  como en Argentina.
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
                <img src={team16} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Alexis Salazar
                <br />
                <small className={classes.smallTitle}>Profesor de Piano</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                 
                  Estudió composición musical e interpretación en piano en forma particular; obtuvo el grado
                  de Bachillerato en música en el ex -Instituto de Música de Santiago. Realizó estudios de
                  Pedagogía en Música; posee un Diplomado en Estética y Filosofía en la U.C. y el grado de
                  Magister en Música en la Universidad Mayor.
                  Ha realizado diversos trabajos en el área de la composición y enseñanza de la música. A la
                  fecha, desde el año 2010, es profesor de piano en la Escuela de Música Enrique Soro,
                  contribuyendo, de esta forma, al cumplimiento de los sueños de muchos quilicuranos de tocar
                  sus melodías preferidas y estudiar en forma profesional la interpretación de este instrumento.

                  Ama la música tanto como a las galletitas en las mañanas frías de invierno.
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
                <img src={team17} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Andrea Sepulveda
                <br />
                <small className={classes.smallTitle}>Profesora de Violoncello</small>
              </h4>
              <CardBody>
                <p className={classes.description}>                 
                  Bachiller en educación músical, Universidad Alberto Hurtado. 
                  Realiza sus estudios en violoncello en Universidad de Chile, como también de manera particular con destacados violoncellistas nacionales e internacionales. 
                  Ha participado en diferentes masterclass vinculadas al aprendizaje y enseñanza de este instrumento.
                  Se ha desarrollado en orquestas sinfónicas y de cámara del país presentándose en Te Deum,  GAM, Teatro Municipal de Santiago, Teatro Municipal de Viña del Mar,
                  Teatro municipal de Las Condes y  Festivales musicales en Mendoza Argentina, Caieiras Brasil,entre otros.
                  En música popular, ha participado junto a destacados músicos chilenos e internacionales.
                  En la actualidad es violoncellista estable de la orquesta de Horacio Saavedra.
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
                <img src={team18} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Cristofer Aguilar
                <br />
                <small className={classes.smallTitle}>Profesor de Viola</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Inicio sus estudios en la orquesta estudiantil de Huechuraba, continuo sus estudios con el violinista Sergio prieto.
                  Estudio en el conservatorio universidad mayor con mención  en viola.
                  A lo largo de estos años ha sumado una gran experiencia,  participando de distintos seminarios, Master Class, Monitor en Campamentos Musicales, Conciertos e interpretando como solista;
                  siendo además integrante de diversas Orquestas clásicas. Cuenta con un gran nivel de conocimientos y habilidades, que han sido transmitidas por profesionales de gran talento y trayectoria a nivel nacional.
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
                <img src={team19} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Roberto Morales
                <br />
                <small className={classes.smallTitle}>Profesor de Saxofón</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Comenzó sus estudios de Saxofón en la Escuela de Música Enrique Soro a los 14 años.
                  Ha realizado distintos cursos con profesores particulares.
                  Actualmente estudia con Carl Hamonn.
                  Ha realizado sesiones para Gran Rah, Drefquila y Fallen Roses de México.
                  Con la Gran Orquesta tuvo presentaciones en Mendoza - Argentina.                  
                   
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
                <img src={team20} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Rodrigo Valenzuela
                <br />
                <small className={classes.smallTitle}>Profesor de Guitarra</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Rodrigo Valenzuela es Intérprete en Guitarra Eléctrica especializado Jazz y Música Popular, con estudios en Instituto Profesional Projazz y La Escuela Superior de Jazz, Además de diversos estudios con maestros Nacionales e internacionales.
                  Se ha desempeñado como director de la Banda Soro Blues y diversos proyectos de música progresiva, jazz, música latina, entre otros. Ha realizado presentaciones en la Ciudad de la Haya (Países bajos), 
                  junto al cuarteto del destacado saxofonista español Miguel Sucasas. Arreglador de las partes de guitarra en los Jaivas Sinfónico 2019.
                  Actualmente se encuentra en proceso de ensamble junto al grupo Contracorriente quinteto y trabajando como guitarrista en diferentes sesiones para grabaciones y presentaciones a nivel nacional.
                   
                   
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

          










        </GridContainer>
      </div>
    </div>
  );
}
