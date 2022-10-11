import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ProductTile = ({ product, updatePoints }) => {
    return (

        <Col>
            <Card style={{ height: 500 }}>
                <Card.Img variant="top" style={{ height: 250 }} src={product.image} />
                <Card.Header>Price : {product.price} $</Card.Header>
                <Card.Body>
                    <Card.Title>{product.name} </Card.Title>
                    <Card.Text>
                        {product.short_description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>

                    <Button variant="primary" onClick={(e) => updatePoints(product.price)}>Add To Cart</Button>{' '}

                </Card.Footer>
            </Card>
        </Col>


    )
}
