import { Table, Stack } from 'react-bootstrap';

function TabUsers() {
  return (
    <Stack style={{ marginTop:"80px", textAlign:"center" }} gap={2} className="col-md-15 mx-auto ">
        <h1>USERS LIST</h1>
    <Table striped bordered hover size="xl">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Walid</td>
          <td>walid@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Yasmine</td>
          <td>yasmine@gmail.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Chams</td>
          <td>chams@yahoo.fr</td>
        </tr>
      </tbody>
    </Table>
    </Stack>
  );
}

export default TabUsers;