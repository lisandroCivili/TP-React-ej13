import React, { useState } from "react";
import Clima from './Clima.jsx'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Formulario = () => {
  const [climas, setClimas] = useState({});
  const [ubicacion, setUbicacion] = useState("");
  const [pais, setPais] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    consultaAPI(ubicacion, pais);
  };

  const consultaAPI = async (ubicacion, pais) => {
    try {
      const respuesta = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${ubicacion},${pais}&limit=5&appid=fb86943623fb4f0666ac0e4fbc937c8a&units=metric&lang=es`
      );
      const datos = await respuesta.json();
      setClimas(datos.results);
    } catch (error) {
      console.error("Error al consultar la API:", error);
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
