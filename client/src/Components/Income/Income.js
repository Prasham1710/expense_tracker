import React, { useEffect } from 'react'
import styled from "styled-components";
import { InnerLayout } from '../../styles/Layouts';
import { useGLobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
function Income() {
    const {addIncome,incomes, getIncomes} = useGLobalContext()

    useEffect(() =>{

    },[])
  return (
    <IncomesStyled >
      <InnerLayout>
        <h1>
          Incomes
        </h1>
        <div className='income-content'>
            <div className='form-container'>
             <Form /> </div> 
            <div className='incomes'></div>
         </div>
      </InnerLayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
`
export default Income