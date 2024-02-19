import React, { useState } from "react";
import Clima from './Clima.jsx'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Formulario = () => {
  const [climas, setClimas] = useState([]);
  const [ubicacion, setUbicacion] = useState("");
  const [pais, setPais] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    consultaAPI(ubicacion);
  };

  const consultaAPI = async (ubicacion) => {
    try {
      const latLon = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${ubicacion}&limit=5&appid=fb86943623fb4f0666ac0e4fbc937c8a`

      );
      const datosLatLon = await latLon.json();
      // console.log(datosLatLon[0].lat)
      const clima = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${datosLatLon[0].lat}&lon=${datosLatLon[0].lon}&units=metric&lang=es&appid=fb86943623fb4f0666ac0e4fbc937c8a`
      )
      const climasDatos = await clima.json();
      setClimas([climasDatos]);
      console.log(climasDatos);
    } catch (error) {
      alert("No se encuentra la ubicacion ingresada")
    }
  };

  return (
    <section className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="ubicacion">
          <Form.Label>Ubicación:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Tucumán"
            value={ubicacion}
            onChange={(event) => setUbicacion(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pais">
          <Form.Label>País:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Argentina"
            value={pais}
            onChange={(event) => setPais(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>
      <Clima climas={climas}></Clima>
    </section>
  );
};

export default Formulario;
