import React from "react";
import styled from "styled-components";
import { Container, Description } from "../../component";

export default function Personal() {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Context>
            <img src="/assets/img/background.jpeg" alt="" />
            <Description>
              Nació en Talcahuano el 27 de febrero de 1959. Desde muy joven
              dedico tiempo al deporte (maratones y artes marciales).
            </Description>
            <h2>Académica</h2>
            <Description>
              Cursó la enseñanza básica y media en la ciudad de Talcahuano y
              Puerto Natales. Obtuvo dos Diplomados, en Seguridad Privada en la
              Universidad Santo Tomas y Seguridad Ciudadana en la Universidad de
              Chile.
            </Description>
            <h2>Institucional</h2>
            <Description>
              1976-1979 Se desempeño en la Infantería de Marina, destacado en
              Talcahuano y la región de Magallanes. 1981-2011 Se desempeño en
              Carabineros de Chile, llegando al grado más alto de su Escalafón,
              como Suboficial Mayor de Carabineros, obteniendo la Especialidad
              de Perito Criminalística.
            </Description>
            <h2>Laboral</h2>
            <Description>
              2012-2013: Propietario de la empresa de Seguridad Privada PVG
              (Guardias y Asesoría).
            </Description>
            <h2>Comunitaria</h2>
            <Description>
              2012: Lideró la Junta de Vecinos Portal San Pedro de la Comuna de
              San Pedro de la Paz, gestionando en su mandato proyectos de
              acercamiento a la comunidad entre ellos la sede para su
              organización vecinal.
            </Description>
            <h2>Política</h2>
            <Description>
              2012-2016: Fue elegido Concejal de forma independiente por la
              comuna de San Pedro de la Paz, obteniendo 3.700 votos, ocupando la
              mayoría nacional en su calidad de independiente, periodo que
              presidio la Comisión de Seguridad Ciudadana y además, participo en
              diversos Seminarios y Cursos, como: Seguridad Pública Municipal,
              Seguridad Ciudadana Rol, Tareas y Acciones; Ética en la Función
              Publica, Comunas Digitales, Energías Renovables; Liderazgos y
              Técnica de Orientación Laboral, Apego y Vulnerabilidad Social en
              Primera Infancia, Transparencia y Participación Ciudadana en la
              Gestión Municipal, Estrategia Nacional de Seguridad Publica, Plan
              Comuna Segura, Sistema Protección a Víctimas de Violencia
              Intrafamiliar, Justicia y Violencia Intrafamiliar. 2016: Se
              postula al cargo de Alcalde por la comuna de San Pedro de la Paz,
              obteniendo 3.800 votos, quedando tercero de cinco candidatos.
              2017: Se postula al cargo de Consejero Regional del Biobío,
              obteniendo 5.600 votos, Circunscripción Concepción Sur que
              representa las comunas San Pedro de la Paz, Coronel, Lota, Santa
              Juana y Hualqui, faltando 260 votos para ser electo. 2020: Asume
              el cargo de Consejero Regional, por la renuncia de un Consejero en
              ejercicio.
            </Description>
          </Context>
          <Sidebar>
            <h1>Sidebar</h1>
          </Sidebar>
        </Flex>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;

  h2,
  p {
    color: var(--color-text) !important;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Context = styled.div`
  display: flex;
  flex-direction: column;
  flex: 100%;

  img {
    margin-bottom: 1.2rem;
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    flex: 0 0 70%;
    padding-right: 1.5rem;
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex: 0 0 100%;

  h1 {
    color: var(--color-text) !important;
  }

  @media (min-width: ${(props) => props.theme.dimension.mobile}) {
    flex: 0 0 30%;
  }
`;
