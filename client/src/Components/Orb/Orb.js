import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowsize';

function Orb() {

    const { width, height } = useWindowSize();
    console.log(width, height);
    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(200px, 200px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

    const OrbStyled = styled.div`
        width: 60vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(190deg, #FFA500 0%, #F2994A 100%);
        filter: blur(200px);
        animation: ${moveOrb} 1s  infinite;
    `;
  return (
    <OrbStyled></OrbStyled>
  )
}

export default Orb