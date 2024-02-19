import React from 'react';
import Card from 'react-bootstrap/Card';
const Clima = ({climas}) => {
    return (
        <>
            {
            climas.map((clima, index)=>(

                <Card className='clima text-center mt-3' key={index}>
                    <Card.Body className='cuerpoclima'>
                        <Card.Title>{clima.name}</Card.Title>
                        <Card.Text>Temperatura actual: {clima.main.temp}°</Card.Text>
                        <Card.Text>Con {clima.weather[0].description}</Card.Text>
                        <Card.Text>Y una humedad de {clima.main.humidity}</Card.Text>
                    </Card.Body>
                </Card>      
            )
            )
        }           
        </>
    );
};

export default Clima;