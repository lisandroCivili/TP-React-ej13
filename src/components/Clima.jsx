import React from 'react';
import Card from 'react-bootstrap/Card';
const Clima = ({climas}) => {
    return (
        <>
            {
            climas.map((clima, index)=>(

                <Card className='clima text-center' key={index}>
                    <Card.Body className='cuerpoclima'>
                        <Card.Title>{clima.name}</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <a href='#' className="btn btn-primary w-50 mb-3 align-self-center">Ir a la clima</a>
                </Card>      
            )
            )
        }           
        </>
    );
};

export default Clima;