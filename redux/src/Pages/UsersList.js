import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser, deleteUser, getUsers } from "../Redux/actions/userActions";
import { Button, Stack, Form } from 'react-bootstrap';

function UsersList() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(getUsers(dispatch));
  }, []);

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => dispatch(deleteUser(user.id, dispatch))}>
              Delete User
            </button>
            <Link to={`/users/${user.id}`}>
              <button>Details</button>
            </Link>
          </div>
        );
      })}
    <Stack style={{ marginTop:"80px", textAlign:"center" }} gap={2} className="col-md-5 mx-auto ">
      <Form>
        <h1>ADD USER</h1>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleChanges} type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleChanges} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button 
        variant="dark" 
        type="submit"
        onClick={() => {
          dispatch(addUser(user, dispatch));
        }}
        >
          ADD USER
        </Button>
    </Form>
    </Stack>
    </>
  );
}

export default UsersList;