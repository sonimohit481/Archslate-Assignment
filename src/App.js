import { NavBar } from './Components/NavBar';
import { Button, Stack } from 'react-bootstrap';
function App() {
  return (
    <div >
      <NavBar />
      <hr />
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      <hr />

    </div>
  );
}

export default App;
