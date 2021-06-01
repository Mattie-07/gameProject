import React from "react";
import {Card, Button} from 'react-bootstrap'



const CardLayout = ({game}) => {
    return<>
<Card style={{ width: '18rem' }}>
    <Card.Img style={{ width: '8em' }} variant="top" src={game.img} />
    <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>
            {game.description}
        </Card.Text>
        <Button variant="primary">Check Buying Options</Button>
    </Card.Body>
</Card>
    </>
    }

export default CardLayout