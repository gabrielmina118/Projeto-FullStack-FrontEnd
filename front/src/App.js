import styled from 'styled-components';
import Router from './Routes/Router';

const Main = styled.div`
    width: 100%;
    height: 100vh;
`
export default function App() {
  return (
    <Main>
      <Router />
    </Main>
  );
}


