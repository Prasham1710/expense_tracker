import styled from "styled-components";
import {MainLayout} from './styles/Layouts'
import bg from './img/bg.png'
function App() {
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <h1> hello</h1>
      </MainLayout>
    </AppStyled>
  );
}
 
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  ;`

export default App;
