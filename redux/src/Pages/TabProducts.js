import { Stack, Row, Container } from 'react-bootstrap';
import CardProduct from './CardProduct';

function TabProducts() {
  return (
    <>
      {[
        'Dark',
      ].map((variant) => (
        <Stack style={{ marginTop:"80px", textAlign:"center" }} gap={2} className="col-md-10 row mx-auto ">
        <h1>PRODUCTS LIST</h1>
        <Container  >
          <Row>
            <CardProduct price="20$" name="Imprimante" />
            <CardProduct price="250$" name="Pc Lenovo" />
            <CardProduct price="10$" name="Pc Dell" />
            <CardProduct price="1000$" name="Iphone" />
            <CardProduct price="50$" name="Server Card" />
            <CardProduct price="140$" name="Fax" />
          </Row>
        </Container>
        </Stack>
      ))}
    </>
  );
}

export default TabProducts;