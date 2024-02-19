import React from "react";
import Form from "react-bootstrap/Form";    
import Button from "react-bootstrap/Button";    
const Formulario = () => {

    



  return (
    <section className="mt-3">
      <Form>
        <Form.Group className="mb-3" controlId="ubicacion">
          <Form.Label>Ubicación:</Form.Label>
          <Form.Control type="text" placeholder="Ej: Tucumán" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pais">
          <Form.Label>País:</Form.Label>
          <Form.Control type="text" placeholder="Ej: Argentina" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>
    </section>
  );
};

export default Formulario;
