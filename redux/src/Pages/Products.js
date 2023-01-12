import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../Redux/actions/productActions";
import { FloatingLabel, Button, Stack, Form } from 'react-bootstrap';

function Products() {
  // get products from redux store
  const products = useSelector((state) => state.productReducer.products);
  const [product, setProduct] = useState({});
  const handleChanges = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  return (
    <div className='App'>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
      <Stack style={{ marginTop:"80px", textAlign:"center" }} gap={2} className="col-md-5 mx-auto ">
      <Form>
        <h1>ADD PRODUCT</h1>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleChanges} type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control onChange={handleChanges} type="number" placeholder="Price" />
        </Form.Group>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleChanges} type="checkbox" label="Check me out" />
        </Form.Group>
        <Button 
        variant="dark" 
        type="submit"
        onClick={() => {
          dispatch(addProduct(product));
        }}
        >
          ADD PRODUCT
        </Button>
    </Form>
    </Stack>
    </div>
  );
}

export default Products;