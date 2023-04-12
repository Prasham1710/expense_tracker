import React, {useState} from 'react';
import styled from "styled-components";
import {MainLayout} from './styles/Layouts'
import bg from './img/bg.png'
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
function App() {
  const [active, setActive] = useState(1)

   return (
    <AppStyled bg={bg} className="App">
      <Orb />
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
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
