import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
import Container from 'react-bootstrap/Container' 
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'

function App() {

  return (
    <>
      <Titulo></Titulo>
      <Container>
        <Formulario></Formulario>
      </Container>
    </>
  )
}

export default App
