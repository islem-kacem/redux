import { Col, Card} from 'react-bootstrap';

function CardProduct(props) {
  return (
    <>
      {[
        'Dark',
      ].map((variant) => (
        <Col>
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem', margin:"2rem" }}
          className="mb-3"
        >
          <Card.Header>{props.price}</Card.Header>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </>
  );
}

export default CardProduct;